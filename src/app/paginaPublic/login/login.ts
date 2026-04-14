import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../Servicios/auth-service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  standalone:true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router= inject(Router);
  mensajeError='';
  loginForm=this.fb.group({
    username: ['',Validators.required],
    password: ['',Validators.required],
  })

  iniciarSesion(){
    if(this.loginForm.invalid){
      this.loginForm.markAllAsTouched();
      return;
    }
    const data = this.loginForm.value;

    this.authService.login(data as any).subscribe({
      next:(res) => {
        this.router.navigate(['/admin']);
      },
      error: (error)=>{
        this.mensajeError='Usuario o contraseña incorrecta';
      }
    })
  }
}
