import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css']
})
export class MiComponenteComponent implements OnInit {
  public mostrarPeliculas: boolean;

  constructor() {
    this.mostrarPeliculas = true;
  }

  ngOnInit(): void {
  }

  ocultarPeliculas() {
    this.mostrarPeliculas = false;
  }


}
