import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  darkMode: boolean = false;
  adBlocker: boolean = false;

  constructor(
    @Inject(DOCUMENT) private document: Document) { }

  switchTheme(theme: string, darkModeStatus: boolean) {
    this.darkMode = darkModeStatus;

    let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;

    if (themeLink) {
      themeLink.href = theme + '.css';
    }


  }
}
