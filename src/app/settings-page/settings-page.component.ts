import { Component } from '@angular/core';
import { SettingsService } from '../settings.service';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'; 

@Component({
  selector: 'app-settings-page',
  standalone: true,
  imports: [
    MatSlideToggleModule,
  ],
  templateUrl: './settings-page.component.html',
  styleUrl: './settings-page.component.css'
})
export class SettingsPageComponent {
  settingsService: SettingsService;
  constructor(settingsService: SettingsService) {
    this.settingsService = settingsService;
  }

}
