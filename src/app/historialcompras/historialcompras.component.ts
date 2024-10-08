import { Component, OnInit } from '@angular/core';
import { Compra } from '../models/compra';

@Component({
  selector: 'app-historialcompras',
  templateUrl: './historialcompras.component.html',
  styleUrls: ['./historialcompras.component.css']
})
export class HistorialcomprasComponent implements OnInit {
  historialCompras: Compra[] = [];

  constructor() { }

  ngOnInit(): void {
    this.historialCompras = this.obtenerHistorialCompras();
  }

  obtenerHistorialCompras(): Compra[] {
    return [
      {
        peliculaTitulo: 'Película Ejemplo 1',
        fechaFuncion: '2024-09-20',
        horaFuncion: '18:00',
        cantidadEntradas: 2,
        fechaCompra: '2024-09-15',
        total: 20.00
      },
      {
        peliculaTitulo: 'Película Ejemplo 2',
        fechaFuncion: '2024-09-21',
        horaFuncion: '20:00',
        cantidadEntradas: 3,
        fechaCompra: '2024-09-16',
        total: 30.00
      }
    ];
  }
}
