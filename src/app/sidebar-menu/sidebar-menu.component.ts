import { Component, EventEmitter, Output } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatListItem, MatNavList } from '@angular/material/list';
import { MatSidenav } from '@angular/material/sidenav';
import { CantaraPage } from '../cantara-datatypes';

@Component({
  selector: 'app-sidebar-menu',
  standalone: true,
  imports: [ MatButtonModule, MatSidenav, MatNavList, MatListItem ],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.css'
})
export class SidebarMenuComponent {
  active: Number = 0;
  menuEntries = [
    { name: "Selection", page: CantaraPage.PageSongSelection, link: "#", activated: true },
    { name: "Presentation", page: CantaraPage.PageSongPresentation, link: "#", activated: false },
    { name: "Settings", page: CantaraPage.PageSettings, link: "#", activated: false}
  ]

  @Output() entryClicked = new EventEmitter<CantaraPage>();

  itemClicked(name: String) {
    for (var item of this.menuEntries) {
      if (item.name == name) {
        item.activated = true;
        this.entryClicked.emit(item.page);
      } else {
        item.activated = false;
      }
    }
  }
}
