import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-peliculaslist',
  templateUrl: './peliculaslist.component.html',
  styleUrls: ['./peliculaslist.component.css']
})
export class PeliculaslistComponent implements OnInit {
  peliculas = [
    {
      id: 1,
      titulo: 'Película 1',
      imagen: 'https://via.placeholder.com/400x300',
      genero: 'Acción',
      duracion: 120,
      descripcion: 'Una película llena de acción y aventura.',
      fechaEstreno: '2024-09-15'
    },
    {
      id: 2,
      titulo: 'Otra Película',
      imagen: 'https://via.placeholder.com/400x300',
      genero: 'Comedia',
      duracion: 90,
      descripcion: 'Una comedia que te hará reír a carcajadas.',
      fechaEstreno: '2024-10-01'
    },
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  verDetalles(id: number) {
    console.log('Ver detalles de pelicula con ID: ', id);
  }

  comprarEntradas(id: number) {
    console.log('Comprar entradas para la pelicula con ID: ', id);
    this.router.navigate(['/compra']);
  }
}
