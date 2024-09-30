import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../services/peliculas.service';
import { Pelicula } from '../models/pelicula';
import { FuncionesService } from '../services/funciones.service';
import { Funcion } from '../models/funcion';

@Component({
  selector: 'app-peliculadetail',
  templateUrl: './peliculadetail.component.html',
  styleUrls: ['./peliculadetail.component.css']
})
export class PeliculadetailComponent implements OnInit {
  pelicula: Pelicula | null = null;
  funciones: Funcion[] = [];
  idPelicula: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private peliculaService: PeliculasService,
    private funcionService: FuncionesService
  ) { }

  ngOnInit(): void {
    this.idPelicula = this.route.snapshot.paramMap.get('id') || '';
    this.peliculaService.getPeliculaByID(this.idPelicula).subscribe(
      (data) => {
        this.pelicula = data[0];
      },
      (error) => {
        console.log('Error al obtener la pelicula: ', error);
      }
    );
    this.funcionService.getFuncionesByPelicula(this.idPelicula).subscribe(
      (data) => {
        this.funciones = data;
      },
      (error) => {
        console.log('Error al obtener las funciones de la pelicula: ', error);
      }
    );
  }

  volverAListado() {
    console.log('Volver al listado de películas');
    this.router.navigate(['/peliculas']);
  }

  comprarEntradas(funcionId?: number) {
    if (funcionId) {
      console.log('Comprar entradas para la función con ID:', funcionId);
      this.router.navigate([`/comprar/${funcionId}`]);
    } else {
      console.log('Comprar entradas para la película');
      this.router.navigate([`/comprar/0`]);
    }
  }
}
