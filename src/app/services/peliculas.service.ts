import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pelicula } from '../models/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private apiUrl = 'http://localhost:5000/api/peliculas';

  constructor(private http: HttpClient) { }

  getPeliculas(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  getPeliculaByID(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  addPelicula(pelicula: Pelicula): Observable<any> {
    return this.http.post(this.apiUrl, pelicula);
  }

  updatePelicula(id: string, pelicula: Pelicula): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, pelicula);
  }

  deletePelicula(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
