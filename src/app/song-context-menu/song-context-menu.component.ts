import { Component, Input, ViewChild } from '@angular/core';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu'; 
import { CantaraSongFile } from '../cantara-datatypes';

@Component({
  selector: 'app-song-context-menu',
  standalone: true,
  imports: [
    MatMenuModule,
  ],
  templateUrl: './song-context-menu.component.html',
  styleUrl: './song-context-menu.component.css'
})
export class SongContextMenuComponent {
  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;

  ngAfterViewInit() {
  }

  toggleMenu() {
    this.trigger.openMenu();
  }
  
  @Input()
  song: CantaraSongFile | undefined;
  
  @Input()
  isRemovable: boolean = false;
}
