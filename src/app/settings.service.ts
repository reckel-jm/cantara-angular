import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  isDark = false;

  static readonly darkStyleName = 'cyan-orange';
  constructor() { }

  toggleDarkTheme() {

    if (this.isDark) {
      let styleElements: any = document.head.getElementsByTagName('link');
      for (let item of styleElements) {
        if (item.id == 'dark-mode') {
          document.head.removeChild(item);
        }
        this.isDark = false;
      }
    
    } else {
        const style = document.createElement('link');
        style.id = 'dark-mode';
        style.rel = 'stylesheet';
        style.type = 'text/css';
        style.href = `${SettingsService.darkStyleName}.css`; //<--add assets

        document.head.appendChild(style);
        this.isDark = true;
    }
  
  }

  getDarkThemeEnabled(): boolean {
    return this.isDark;
  }
}
