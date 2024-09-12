import { Component, Input, ViewChild } from '@angular/core';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu'; 
import { CantaraSongFile } from '../cantara-datatypes';
import { FileManagerServiceService } from '../file-manager-service.service';

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

  fileManagerService: FileManagerServiceService;
  
  @Input()
  song: CantaraSongFile | undefined;
  
  @Input()
  isRemovable: boolean = false;

  index: number | null = null;

  constructor(fileManagerService: FileManagerServiceService) {
    this.fileManagerService = fileManagerService;
  }

  ngAfterViewInit() {
  }

  toggleMenu() {
    this.trigger.openMenu();
  }

  toggleMenuWidth(song: CantaraSongFile, isRemovable: boolean, index: number | null = null) {
    this.song = song;
    this.isRemovable = isRemovable;
    this.index = index;
    this.toggleMenu();
  }

  deleteEntryFromSelectionIndex() {
    if (this.index) { 
      this.fileManagerService.selectedSongs.splice(this.index, 1);
    }
  }

}
