import { AfterViewInit, Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav'; 
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { CantaraPage } from './cantara-datatypes';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { PresentationControllerComponent } from './presentation-controller/presentation-controller.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatSidenavModule, 
    RouterOutlet, 
    HomeComponent,
    SidebarMenuComponent,
    SettingsPageComponent,
    PresentationControllerComponent,
    MatToolbarModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  @ViewChild('sidenavMenu') sidenavMenu!: MatSidenav;

  title = 'cantara-angular'; 

  toolbarShown = true;
  
  /* So that we can access the CantaraPage in the template */
  public CP = CantaraPage;

  currentPage: CantaraPage = CantaraPage.PageSongSelection;

  changeChildPage(page: CantaraPage) {
    this.currentPage = page;

    if (this.currentPage == CantaraPage.PageSongPresentation) {
      this.hideMenu();
      this.toolbarShown = false;
    } else {
      this.toolbarShown = true;
    }
  }

  ngAfterViewInit() {
  }

  hideMenu() {
    this.sidenavMenu.close();
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if ((event.key == 'm') && (this.currentPage == CantaraPage.PageSongPresentation)) {
      this.sidenavMenu.toggle();
    }
  }
}