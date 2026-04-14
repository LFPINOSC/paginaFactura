import { HttpInterceptor, HttpInterceptorFn } from "@angular/common/http";

export const authInterceptor : HttpInterceptorFn =(req,next)=>{
    const token=localStorage.getItem('token');

    if(token){
        const cloneReq=req.clone({
            setHeaders:{
                Authorization:`Baarer ${token}`
            }
        });
        return next(cloneReq);
    }
    return next(req)
}