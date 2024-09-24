import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

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
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('Correo: ', this.credentials.email);
    console.log('Contraseña: ', this.credentials.password);
  }

  login() {
    this.authService.login(this.credentials).subscribe(
      (response: any) => {
        this.authService.setToken(response.token);
        this.router.navigate(['']);
      },
    (error) => {
      this.errorMessage = 'Error de autenticacion. Verifica tus credenciales.';
    }
    );
  }
  
}
