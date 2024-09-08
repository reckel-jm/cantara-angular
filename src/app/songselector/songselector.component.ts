import { Component, Input } from '@angular/core';
import { SongListEntryComponent } from '../song-list-entry/song-list-entry.component';
import { MatList } from '@angular/material/list';
import { SongListEntry } from '../song-list-entry';
import { MatInputModule } from '@angular/material/input'; 

@Component({
  selector: 'app-songselector',
  standalone: true,
  imports: [
    MatList, 
    MatInputModule,
    SongListEntryComponent
  ],
  templateUrl: './songselector.component.html',
  styleUrl: './songselector.component.css'
})
export class SongselectorComponent {
  @Input()
  songList?: SongListEntry[];
}
