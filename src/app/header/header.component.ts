import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  nombreUsuario: string | null = null;

  constructor(
    private router: Router,
    private authService: AuthService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.initializeNavbarBurger();
    this.nombreUsuario = localStorage.getItem('nombreUsuario');
    this.cdr.detectChanges();
  }

  initializeNavbarBurger() {
    document.addEventListener('DOMContentLoaded', () => {
      const navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

      if (navbarBurgers.length > 0) {
        navbarBurgers.forEach(el => {
          el.addEventListener('click', () => {
            const target = el.dataset.target;
            const $target = document.getElementById(target!);

            el.classList.toggle('is-active');
            $target?.classList.toggle('is-active');
          });
        });
      }
    });
  }

  logout() {
    this.authService.logout();
    localStorage.removeItem('nombreUsuario');
    localStorage.removeItem('correoUsuario');
    this.nombreUsuario = null;
    this.cdr.detectChanges();
    this.router.navigate(['/login']);
  }
}
