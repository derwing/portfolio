import { StorageService } from './services/storage.service';
import { ThemeService } from './services/theme.service';
import { Component } from '@angular/core';

// Translations
import { TranslateService } from '@ngx-translate/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  theme: string = 'lara-light';
  darkModeStatus: boolean = false;

  constructor(
    private translate: TranslateService,
    private primengConfig: PrimeNGConfig,
    private themeService: ThemeService,
    private storageService: StorageService) {
    this.setAppLanguage();
    this.setTheme();
  }

  setAppLanguage() {
    this.primengConfig.ripple = true;

    if (localStorage.getItem('portfolio-language')) {
      let lang = localStorage.getItem('portfolio-language') || 'en';
      this.translate.setDefaultLang(lang);
      this.translate.use(lang);
    } else {
      this.translate.setDefaultLang('fr');
      this.translate.setDefaultLang('es');
      this.translate.setDefaultLang('en');
      this.translate.use(this.translate.getBrowserLang() || 'en');
    }
  }

  setTheme() {
    let storageTheme = this.storageService.getData('themeMode');
    if (storageTheme === 'lara-dark') {
      var element = document.getElementById('body') as HTMLElement;
      element.classList.add('dark-mode');
      this.darkModeStatus = true;
      this.themeService.switchTheme(storageTheme, this.darkModeStatus);
    } else {
      var element = document.getElementById('body') as HTMLElement;
      element.classList.remove('dark-mode');
      this.darkModeStatus = false;
      this.themeService.switchTheme(this.theme, this.darkModeStatus);
    }

    this.detectAdBlocker();

  }

  async detectAdBlocker() {
    const adBlocker = await this.checkAdBlocker();
    if (adBlocker) {
      this.themeService.adBlocker = true;
    }
  }

  async checkAdBlocker() {
    let blocker;
    async function tryRequest() {
      try {
        return fetch(
          new Request("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
            method: 'HEAD',
            mode: 'no-cors'
          }))
          .then(function (response) {
            blocker = false;
            return blocker;
          }).catch(function (e) {
            blocker = true;
            return blocker;
          });
      } catch (error) {
        console.log(error);
        blocker = true;
        return blocker;
      }
    }
    return blocker !== undefined ? blocker : await tryRequest();
  }
}
