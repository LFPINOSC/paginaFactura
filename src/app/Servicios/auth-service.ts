import { inject, Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { environment } from '../../environment/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private http = inject(HttpClient);
  private platformId=inject(PLATFORM_ID);

  apiUrl= `${environment.apiUrl}/login`;
  private tohenKey='token';

  login(data: LoginRequest) : Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.apiUrl, data).pipe(
      tap((response: LoginResponse) => {
        localStorage.setItem(this.tohenKey, response.token);
      })
    );
  }
  getToken(): string | null {
    if(isPlatformBrowser(this.platformId)){
        return localStorage.getItem(this.tohenKey);
    }
    return null;
    
  }

  logout(): void {
    localStorage.removeItem(this.tohenKey);
  }
  isAuthenticated(): boolean {
    return this.getToken() !== null;
  }
}
