import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcioneslist',
  templateUrl: './funcioneslist.component.html',
  styleUrls: ['./funcioneslist.component.css']
})
export class FuncioneslistComponent implements OnInit {
  funciones = [
    {
      id: 1,
      peliculaTitulo: 'Película Ejemplo 1',
      fecha: '2024-09-15',
      hora: '18:00',
      sala: 'Sala 1'
    },
    {
      id: 2,
      peliculaTitulo: 'Película Ejemplo 2',
      fecha: '2024-09-16',
      hora: '20:00',
      sala: 'Sala 2'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  volverAInicio() {
    console.log('Volver a la página principal');
  }

  comprarEntradas(funcionId: number) {
    console.log('Comprar entradas para la función con ID:', funcionId);
  }
}
