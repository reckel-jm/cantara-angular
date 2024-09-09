import { Component, input, Input } from '@angular/core';
import { SongListEntry } from '../song-list-entry';
import { MatListItem, MatListOption } from '@angular/material/list';
import { CantaraSongFile } from '../cantara-datatypes';

@Component({
  selector: 'app-song-list-entry',
  standalone: true,
  imports: [ MatListOption ],
  templateUrl: './song-list-entry.component.html',
  styleUrl: './song-list-entry.component.css'
})
export class SongListEntryComponent {
  @Input()
  songlistentry!: CantaraSongFile;
}
