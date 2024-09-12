import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { FileManagerServiceService } from '../file-manager-service.service';
import { MatButtonModule } from '@angular/material/button'; 
import { MatIconModule } from '@angular/material/icon';

/* For the Context Menu */
import { CdkMenuModule } from '@angular/cdk/menu'; 
import { SongContextMenuComponent } from '../song-context-menu/song-context-menu.component';

@Component({
  selector: 'app-selected-presentation-elements-list',
  standalone: true,
  imports: [
    MatListModule,
    CdkMenuModule,
    MatButtonModule,
    MatIconModule,
    SongContextMenuComponent,
  ],
  templateUrl: './selected-presentation-elements-list.component.html',
  styleUrl: './selected-presentation-elements-list.component.css'
})
export class SelectedPresentationElementsListComponent {
  fileManagerService: FileManagerServiceService;
  constructor(fileManagerService: FileManagerServiceService) {
    this.fileManagerService = fileManagerService;
  }
}
