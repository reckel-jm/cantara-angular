import { Component, input, Input, ViewChild } from '@angular/core';
import { SongListEntry } from '../song-list-entry';
import { MatListItem, MatListModule, MatListOption } from '@angular/material/list';
import { CantaraSongFile, CantaraSongList } from '../cantara-datatypes';
import { MatChipsModule } from '@angular/material/chips'; 
import { SongContextMenuComponent } from '../song-context-menu/song-context-menu.component';
import { MatMenuTrigger, MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-song-list-entry',
  standalone: true,
  imports: [ 
    MatListOption, 
    MatListItem,
    MatListModule, 
    MatChipsModule,
    SongContextMenuComponent,
  ],
  templateUrl: './song-list-entry.component.html',
  styleUrl: './song-list-entry.component.css'
})
export class SongListEntryComponent {
  
  @Input()
  songlistentry!: CantaraSongFile;
  
  /* The array where the selected song will be added to */
  @Input()
  selectionArray!: CantaraSongList | null

  @Input()
  showTags: Boolean = false;
}
