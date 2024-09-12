import { Component, Input } from '@angular/core';
import { SongListEntryComponent } from '../song-list-entry/song-list-entry.component';
import { MatList, MatSelectionList } from '@angular/material/list';
import { SongListEntry } from '../song-list-entry';
import { FileManagerServiceService } from '../file-manager-service.service';
import { SelectedPresentationElementsListComponent } from '../selected-presentation-elements-list/selected-presentation-elements-list.component';
import { MatCardModule } from '@angular/material/card'; 
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-songselector',
  standalone: true,
  imports: [
    MatSelectionList,
    MatList,
    SongListEntryComponent,
    SelectedPresentationElementsListComponent,
    MatCardModule,
  ],
  templateUrl: './songselector.component.html',
  styleUrl: './songselector.component.css'
})
export class SongselectorComponent {

  fileManagerService: FileManagerServiceService;
  settingsService: SettingsService

  constructor(fileManagerService: FileManagerServiceService, settingsService: SettingsService) {
    this.fileManagerService = fileManagerService;
    this.settingsService = settingsService;
  }

}
