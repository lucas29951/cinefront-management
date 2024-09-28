import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials = {
    email: '',
    password: ''
  };
  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.cdr.detectChanges();
  }

  onSubmit() {
    console.log('Correo: ', this.credentials.email);
    console.log('Contraseña: ', this.credentials.password);
  }

  login() {
    this.authService.login(this.credentials).subscribe(
      (response: any) => {
        this.authService.setToken(response.token);
        localStorage.setItem('nombreUsuario', response.user.nombre);
        localStorage.setItem('correoUsuario', response.user.email);
        this.cdr.detectChanges();
        this.router.navigate(['/profile']);
      },
    (error) => {
      this.errorMessage = 'Error de autenticacion. Verifica tus credenciales.';
    }
    );
  }
  
}
