import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {   RouterOutlet,RouterLink,RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  //imports: [RouterOutlet],
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fpmgmtsys';
  public isCollapsed = true;
}
