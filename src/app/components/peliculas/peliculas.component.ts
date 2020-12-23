import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {
  public titulo;

  constructor() {
    console.log('constructor lanzado');
    this.titulo = 'componente peliculas';
   }

  ngOnInit(): void {
    console.log('onInit Cargado');
  }

  ngDoCheck() {
    console.log('doCheck lanzado');
  }

  cambiarTitulo(){
    this.titulo = 'El titulo ha sido cambiado';
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('Componente se va a eliminar');
  }

}
