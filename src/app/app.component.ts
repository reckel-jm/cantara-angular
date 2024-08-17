import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatSidenavModule, 
    RouterOutlet, 
    HomeComponent,
    SidebarMenuComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cantara-angular'; 
}
