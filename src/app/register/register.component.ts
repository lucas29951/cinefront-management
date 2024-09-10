import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  nombre: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.password !== this.confirmPassword) {
      console.log("Las contraseñas no coinciden.");
      return;
    }
    console.log("Nombre: ", this.nombre);
    console.log("Email: ", this.email);
    console.log("Contraseña: ", this.password);
  }
}
