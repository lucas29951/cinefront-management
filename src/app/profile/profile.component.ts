import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  nombre: string = 'Lucas Rodriguez';
  email: string = 'lucas@gmail.com';
  fechaRegistro: string = '15 de Septiembre, 2024';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onEditProfile() {
    console.log('Editar perfil');
  }

  onChangePassword() {
    console.log('Cambiar contraseña');
  }

  onLogout() {
    this.authService.logout();
    localStorage.removeItem('nombreUsuario');
    this.router.navigate(['/login']);
  }
}
