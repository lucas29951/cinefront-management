import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-peliculadetail',
  templateUrl: './peliculadetail.component.html',
  styleUrls: ['./peliculadetail.component.css']
})
export class PeliculadetailComponent implements OnInit {
  pelicula = {
    titulo: 'Película Ejemplo',
    imagen: 'https://via.placeholder.com/350x200',
    descripcion: 'Una descripción completa de la película de ejemplo...',
    fechaEstreno: '2024-09-15',
    director: 'John Doe',
    reparto: 'Actor 1, Actor 2, Actor 3',
    clasificacion: 'PG-13',
    duracion: 120,
    genero: 'Acción',
    funciones: [
      { id: 1, fecha: '2024-09-15', hora: '18:00', sala: 'Sala 1' },
      { id: 2, fecha: '2024-09-16', hora: '20:00', sala: 'Sala 2' },
    ]
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  volverAListado() {
    console.log('Volver al listado de películas');
    this.router.navigate(['/peliculas']);
  }

  comprarEntradas(funcionId?: number) {
    if (funcionId) {
      console.log('Comprar entradas para la función con ID:', funcionId);
    } else {
      console.log('Comprar entradas para la película');
    }
  }
}
