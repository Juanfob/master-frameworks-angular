import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {
  public titulo;
  public peliculas: Array<Pelicula>;

  constructor() {
    this.titulo = 'componente peliculas';
    this.peliculas = [
      new Pelicula('Spiderman 4', 2019, 'https://cnet1.cbsistatic.com/img/rfzZ-7G32v_qEt2uCD0b4KB2rho=/940x0/2019/03/26/13d0a566-7355-4381-be24-dee281227504/spider-man-far-from-home-promo-image-1.jpg'),
      new Pelicula('Vengadores Endgame', 2019, 'https://as.com/tikitakas/imagenes/2019/04/26/portada/1556258369_131914_1556258703_noticia_normal.jpg'),
      new Pelicula('Batman vs Superman', 2015, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTujMN0ViTbR_tUzQBB1L1sA_vVW_K-FTicDw&usqp=CAU'),
      new Pelicula('Batman vs Superman', 2015, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTujMN0ViTbR_tUzQBB1L1sA_vVW_K-FTicDw&usqp=CAU'),
    ];
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
