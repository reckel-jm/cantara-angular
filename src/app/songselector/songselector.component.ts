import { Component, Input } from '@angular/core';
import { SongListEntryComponent } from '../song-list-entry/song-list-entry.component';
import { MatList, MatSelectionList } from '@angular/material/list';
import { SongListEntry } from '../song-list-entry';
import { MatInputModule } from '@angular/material/input'; 
import { FileManagerServiceService } from '../file-manager-service.service';

@Component({
  selector: 'app-songselector',
  standalone: true,
  imports: [
    MatSelectionList,
    MatInputModule,
    SongListEntryComponent
  ],
  templateUrl: './songselector.component.html',
  styleUrl: './songselector.component.css'
})
export class SongselectorComponent {

  fileManagerService: FileManagerServiceService;
  constructor(fileManagerService: FileManagerServiceService) {
    this.fileManagerService = fileManagerService;
  }

}
