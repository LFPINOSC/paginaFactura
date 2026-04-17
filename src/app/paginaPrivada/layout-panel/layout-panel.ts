import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-layout-panel',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './layout-panel.html',
  styleUrl: './layout-panel.css',
})
export class LayoutPanel {}
