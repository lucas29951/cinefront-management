import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class FuncionesService {
  private apiUrl = 'http://localhost:5000/api/funciones';

  constructor(private http: HttpClient) { }

  getFunciones(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  addFuncion(funcion: any): Observable<any> {
    return this.http.post(this.apiUrl, funcion);
  }

  updateFuncion(id: string, funcion: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, funcion);
  }

  deleteFuncion(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
