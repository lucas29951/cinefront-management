import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:5000';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  register(user: Usuario): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/usuarios/register`, user);
  }

  login(credentials: Partial<Usuario>): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/usuarios/login`, credentials);
  }

  setToken(token: string) {
    localStorage.setItem('authToken', token);
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  isAuthenticated(): boolean {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('authToken');
    this.router.navigate(['/login']);
  }
}
