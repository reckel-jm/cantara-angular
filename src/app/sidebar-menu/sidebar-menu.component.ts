import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-sidebar-menu',
  standalone: true,
  imports: [ MatButtonModule ],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.css'
})
export class SidebarMenuComponent {
  active: Number = 0;
}
