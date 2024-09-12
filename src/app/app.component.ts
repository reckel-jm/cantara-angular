import { AfterViewInit, Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav'; 
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { CantaraPage } from './cantara-datatypes';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { PresentationControllerComponent } from './presentation-controller/presentation-controller.component';
import { MatIconModule } from '@angular/material/icon';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatInputModule } from '@angular/material/input'; 

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
    MatIconModule,
    MatInputModule,
  ],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(300, style({ opacity: 1 }))
      ])
    ]),
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

  public innerWidth: number = 0;
  ngOnInit() {
      this.innerWidth = Number(window.innerWidth);
  }
  
  changeChildPage(page: CantaraPage) {
    this.currentPage = page;

    if (this.currentPage == CantaraPage.PageSongPresentation) {
      this.hideMenu();
      this.toolbarShown = false;
    } else {
      this.toolbarShown = true;
    }

    if (this.innerWidth <= 600) {
      this.hideMenu();
    }
  }

  ngAfterViewInit() {
  }

  toggleMenu() {
    this.sidenavMenu.toggle();
  }

  openMenu() {
    this.sidenavMenu.open();
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

  /* We open/close the menu based on the window size */
  @HostListener('window:resize',  ['$event'])
  onResize(event: { target: { innerWidth: () => any; }; }) {
    // We update the innerWidth property which is used at other parts
    this.innerWidth = Number(event.target.innerWidth);
    if (this.innerWidth > 600) {
      this.openMenu();
    } else {
      this.hideMenu();
    }
  }

  @HostListener('contextmenu', ['$event'])
  onRightClick(event : { preventDefault(): any } ) {
    event.preventDefault();
  }
}   