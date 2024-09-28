import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  nombre: string | null = '';
  email: string | null = '';
  fechaRegistro: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.nombre = localStorage.getItem('nombreUsuario');
    this.email = localStorage.getItem('correoUsuario');
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
    localStorage.removeItem('correoUsuario');
    this.cdr.detectChanges();
    this.router.navigate(['/login']);
  }
}
