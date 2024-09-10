import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  nombre: string = 'Lucas Rodriguez';
  email: string = 'lucas@gmail.com';
  fechaRegistro: string = '15 de Septiembre, 2024';

  constructor() { }

  ngOnInit(): void {
  }

  onEditProfile() {
    console.log('Editar perfil');
  }

  onChangePassword() {
    console.log('Cambiar contraseña');
  }

  onLogout() {
    console.log('Cerrar sesion');
  }
}
