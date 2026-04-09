import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from "./Componentes/menu/menu";
import { Enlaceinteres } from "./Componentes/enlaceinteres/enlaceinteres";
import { Piepagina } from "./Componentes/piepagina/piepagina";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menu, Enlaceinteres, Piepagina],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('paginaFactura');
}
