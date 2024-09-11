import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { FileManagerServiceService } from '../file-manager-service.service';

@Component({
  selector: 'app-selected-presentation-elements-list',
  standalone: true,
  imports: [
    MatListModule,
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
