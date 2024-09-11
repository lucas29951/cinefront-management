import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  gestionarPeliculas() {
    console.log('Redirigir a la gestión de películas');
  }

  gestionarFunciones() {
    console.log('Redirigir a la gestión de funciones');
  }

  gestionarUsuarios() {
    console.log('Redirigir a la gestión de usuarios');
  }
}
