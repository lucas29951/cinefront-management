import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentSlide = 0;
  funciones = [
    {
      pelicula: 'Pelicula 1',
      imagen: 'https://via.placeholder.com/400x300',
      hora: '18:00',
      sala: 'Sala 1'
    },
    {
      pelicula: 'Pelicula 2',
      imagen: 'https://via.placeholder.com/400x300',
      hora: '20:00',
      sala: 'Sala 2'
    },
    {
      pelicula: 'Pelicula 3',
      imagen: 'https://via.placeholder.com/400x300',
      hora: '22:00',
      sala: 'Sala 3'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide > 0) ? this.currentSlide - 1 : this.funciones.length - 1;
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide < this.funciones.length - 1) ? this.currentSlide + 1 : 0;
    this.updateCarousel();
  }

  updateCarousel() {
    const carouselContainer = document.querySelector('.carousel-container') as HTMLElement;
    const slideWidth = 350;
    carouselContainer.style.transform = `translateX(-${this.currentSlide * slideWidth}px)`;
  }

  verDetallesFuncion(funcion: any) {
    console.log('Ver detalles de la función:', funcion);
  }
}
