import { Component } from '@angular/core';
import { SongListEntryComponent } from '../song-list-entry/song-list-entry.component';
import { MatList } from '@angular/material/list';
import { SongselectorComponent } from '../songselector/songselector.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SongselectorComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
