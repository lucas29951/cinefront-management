import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculasService } from '../services/peliculas.service';
import { Pelicula } from '../models/pelicula';

@Component({
  selector: 'app-peliculaslist',
  templateUrl: './peliculaslist.component.html',
  styleUrls: ['./peliculaslist.component.css']
})
export class PeliculaslistComponent implements OnInit {
  peliculas: Pelicula[] = [];

  constructor(
    private router: Router,
    private service: PeliculasService
  ) { }

  ngOnInit(): void {
    this.getPeliculas();
  }

  getPeliculas(): void {
    this.service.getPeliculas().subscribe(
      (data) => {
        this.peliculas = data;
      },
      (error) => {
        console.error('Error al obtener las peliculas', error);
      }
    );
  }

  verDetalles(id: number) {
    console.log('Ver detalles de pelicula con ID: ', id);
    this.router.navigate([`/peliculas/${id}`]);
  }

  comprarEntradas(id: number) {
    console.log('Comprar entradas para la pelicula con ID: ', id);
    this.router.navigate([`/comprar/${id}`]);
  }
}
