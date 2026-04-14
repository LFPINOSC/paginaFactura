import { inject } from "@angular/core";
import { CanActivate, CanActivateFn, Router } from "@angular/router";
import { AuthService } from "./auth-service";

export const authGuard : CanActivateFn = () =>{
    const authServices= inject(AuthService);

    const router=inject(Router);
    
    if (authServices.isAuthenticated()){
        return true;
    }
    router.navigate(['/login']);
    return false;
}