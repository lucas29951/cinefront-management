import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FuncionesService } from '../services/funciones.service';
import { Funcion } from '../models/funcion';

@Component({
  selector: 'app-funcioneslist',
  templateUrl: './funcioneslist.component.html',
  styleUrls: ['./funcioneslist.component.css']
})
export class FuncioneslistComponent implements OnInit {
  funciones: Funcion[] = [];

  constructor(
    private router: Router,
    private funcionService: FuncionesService
  ) { }

  ngOnInit(): void {
    this.cargarFunciones();
  }

  cargarFunciones() {
    this.funcionService.getFunciones().subscribe(
      (data) => {
        this.funciones = data;
      },
      (error) => {
        console.log('Error al obtener las funciones: ', error);
      }
    );
  }

  volverAInicio() {
    console.log('Volver a la página principal');
    this.router.navigate(['/']);
  }

  comprarEntradas(funcionId: number) {
    console.log('Comprar entradas para la función con ID:', funcionId);
    this.router.navigate([`/comprar/${funcionId}`]);
  }
}
