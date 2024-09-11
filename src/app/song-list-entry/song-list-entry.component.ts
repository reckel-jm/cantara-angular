import { Component, input, Input } from '@angular/core';
import { SongListEntry } from '../song-list-entry';
import { MatListItem, MatListModule, MatListOption } from '@angular/material/list';
import { CantaraSongFile, CantaraSongList } from '../cantara-datatypes';
import { MatChipsModule } from '@angular/material/chips'; 

@Component({
  selector: 'app-song-list-entry',
  standalone: true,
  imports: [ 
    MatListOption, 
    MatListItem,
    MatListModule, 
    MatChipsModule
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
}
