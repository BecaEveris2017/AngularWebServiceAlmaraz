import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title:string;
  listaColores:string[];
  cambiar:boolean;

  constructor() {
    this.title = 'Beca Angular Everis';
    this.listaColores = ['amarillo', 'azul', 'negro'];
    this.cambiar = true;
  }

  addColor(color) {
    this.listaColores.push(color.value);
    color.value = '';
    return false;
  }

  launchLista() {
    this.cambiar = !this.cambiar;
  }
}
