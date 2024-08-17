import { Component, input, Input } from '@angular/core';
import { SongListEntry } from '../song-list-entry';
import { MatListItem } from '@angular/material/list';

@Component({
  selector: 'app-song-list-entry',
  standalone: true,
  imports: [ MatListItem ],
  templateUrl: './song-list-entry.component.html',
  styleUrl: './song-list-entry.component.css'
})
export class SongListEntryComponent {
  @Input()
  songlistentry!: SongListEntry;
}
