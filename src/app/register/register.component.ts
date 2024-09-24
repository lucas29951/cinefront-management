import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = {
    nombre: '',
    email: '',
    password: '',
    rol: 2
  };
  confirmPassword: string = '';
  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.user.password !== this.confirmPassword) {
      console.log("Las contraseñas no coinciden.");
      return;
    }
    console.log("Nombre: ", this.user.nombre);
    console.log("Email: ", this.user.email);
    console.log("Contraseña: ", this.user.password);
  }

  register() {
    console.log("Nombre: ", this.user.nombre);
    console.log("Email: ", this.user.email);
    console.log("Contraseña: ", this.user.password);
    console.log("Rol: ", this.user.rol);
    
    this.authService.register(this.user).subscribe(
      (response) => {
        this.router.navigate(['/login']);
      },
      (error) => {
        this.errorMessage = 'Error al registrar el usuario.';
      }
    );
  }
}
