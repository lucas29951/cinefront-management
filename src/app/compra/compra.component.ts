import { Component, OnInit } from '@angular/core';


interface Asiento {
  numero: number;
  estado: 'disponible' | 'reservado' | 'seleccionado';
}


@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {
  pelicula = { titulo: 'Pelicula de Ejemplo' };
  funcion = { fecha: '12 de Septiembre', hora: '20:00', sala: 'Sala 1' };

  asientos: Asiento[] = [
    { numero: 1, estado: 'disponible' },
    { numero: 2, estado: 'disponible' },
    { numero: 3, estado: 'reservado' },
    { numero: 4, estado: 'disponible' },
    { numero: 5, estado: 'reservado' },
    { numero: 6, estado: 'disponible' },
    { numero: 7, estado: 'disponible' },
    { numero: 8, estado: 'disponible' },
    { numero: 9, estado: 'reservado' },
    { numero: 10, estado: 'disponible' },
    { numero: 11, estado: 'reservado' },
    { numero: 12, estado: 'disponible' },
    { numero: 13, estado: 'disponible' },
    { numero: 14, estado: 'disponible' },
    { numero: 15, estado: 'disponible' },
    { numero: 16, estado: 'disponible' },
    { numero: 17, estado: 'disponible' },
    { numero: 18, estado: 'disponible' },
    { numero: 19, estado: 'disponible' },
    { numero: 20, estado: 'disponible' },
    { numero: 21, estado: 'disponible' },
    { numero: 22, estado: 'disponible' },
    { numero: 23, estado: 'disponible' },
    { numero: 24, estado: 'reservado' },
    { numero: 25, estado: 'disponible' },
    { numero: 26, estado: 'reservado' },
    { numero: 27, estado: 'disponible' },
    { numero: 28, estado: 'disponible' },
    { numero: 29, estado: 'disponible' },
    { numero: 30, estado: 'disponible' },
    { numero: 31, estado: 'disponible' },
    { numero: 32, estado: 'disponible' },
    { numero: 33, estado: 'disponible' },
    { numero: 34, estado: 'disponible' },
    { numero: 35, estado: 'disponible' },
    { numero: 36, estado: 'disponible' },
  ];

  asientosSeleccionados: Asiento[] = [];
  precioPorEntrada = 100;
  precioTotal = 0;

  constructor() { }

  ngOnInit(): void {
  }

  seleccionarAsiento(asiento: Asiento) {
    if (asiento.estado === 'disponible') {
      asiento.estado = 'seleccionado';
      this.asientosSeleccionados.push(asiento);
    } else if (asiento.estado === 'seleccionado') {
      asiento.estado = 'disponible';
      this.asientosSeleccionados = this.asientosSeleccionados.filter(
        (a) => a.numero !== asiento.numero
      );
    }
    this.calcularTotal();
  }

  calcularTotal() {
    this.precioTotal = this.asientosSeleccionados.length * this.precioPorEntrada;
  }

  confirmarCompra() {
    console.log('Compra confirmada: ', this.asientosSeleccionados);
  }
}
