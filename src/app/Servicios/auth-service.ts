import { inject, Inject, Injectable } from '@angular/core';
import { environment } from '../../environment/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private http = inject(HttpClient);

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
    return localStorage.getItem(this.tohenKey);
  }

  logout(): void {
    localStorage.removeItem(this.tohenKey);
  }
  isAuthenticated(): boolean {
    return this.getToken() !== null;
  }
}
