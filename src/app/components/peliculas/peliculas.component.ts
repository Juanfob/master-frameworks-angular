import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {
  public titulo;
  public peliculas: Array<any>;

  constructor() {
    this.titulo = 'componente peliculas';
    this.peliculas = [
      {title: "Spiderman 4", image: "https://cnet1.cbsistatic.com/img/rfzZ-7G32v_qEt2uCD0b4KB2rho=/940x0/2019/03/26/13d0a566-7355-4381-be24-dee281227504/spider-man-far-from-home-promo-image-1.jpg"},
      {title: "Vengadores Endgame", image: "https://as.com/tikitakas/imagenes/2019/04/26/portada/1556258369_131914_1556258703_noticia_normal.jpg"},
      {title: "Batman vs Superman", image: "https://i.pinimg.com/originals/08/cb/c3/08cbc3566f6ed36c05811c668113ad6e.jpg"},
      {title: "Batman vs Superman 2", image: "https://i.pinimg.com/originals/08/cb/c3/08cbc3566f6ed36c05811c668113ad6e.jpg"}
    ]
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
