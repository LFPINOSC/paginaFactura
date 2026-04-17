import { Component } from '@angular/core';
import { Piepagina } from "../../Componentes/piepagina/piepagina";
import { Enlaceinteres } from "../../Componentes/enlaceinteres/enlaceinteres";

import { Menu } from "../../Componentes/menu/menu";
import {  RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-layout-panel-public',
  imports: [RouterOutlet,Piepagina, Enlaceinteres, Menu],
  templateUrl: './layout-panel-public.html',
  styleUrl: './layout-panel-public.css',
})
export class LayoutPanelPublic {}
