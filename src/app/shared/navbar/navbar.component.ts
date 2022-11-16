import { StorageService } from './../../services/storage.service';
import { ThemeService } from './../../services/theme.service';
import { Component, Inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';
import { TitleCasePipe } from '@angular/common';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  darkModeStatus: boolean = false;
  items: MenuItem[] = []
  theme: string = 'lara-light';
  iconMoon: boolean = false;;

  constructor(
    public translate: TranslateService,
    private titleCasePipe: TitleCasePipe,
    private themeService: ThemeService,
    private storageService: StorageService
  ) {

  }

  ngOnInit(): void {
    this.darkModeStatus = this.themeService.darkMode;
    this.iconMoon = this.darkModeStatus;
    setTimeout(() => {
      this.loadMenu();
    }, 1000);
  }

  loadMenu() {
    this.items = [
      {
        label: this.titleCasePipe.transform(this.translate.instant('navbar.menu.home')),
        icon: 'pi pi-fw pi-home',
        routerLink: 'home'
      },
      {
        label: this.titleCasePipe.transform(this.translate.instant('navbar.menu.projects')),
        icon: 'pi pi-fw pi-desktop',
        routerLink: 'projects'
      },
      {
        label: this.titleCasePipe.transform(this.translate.instant('navbar.menu.education')),
        icon: 'pi pi-fw pi-book',
        routerLink: 'education'
      },
      {
        label: 'GitHub',
        icon: 'pi pi-fw pi-github',
        url: 'https://github.com/derwing',
        items: [
          { label: 'Angular', icon: 'fa-brands fa-angular', iconClass: 'fa-brands fa-angular' },
          { label: 'Ionic', icon: 'pi pi-fw pi-refresh' }
        ]
      },
    ];
  }

  darkMode() {
    this.darkModeStatus = !this.darkModeStatus;

    if (this.darkModeStatus) {
      this.theme = 'lara-dark';
      this.themeService.switchTheme(this.theme, this.darkModeStatus);
      var element = document.getElementById('body') as HTMLElement;
      element.classList.add('dark-mode');
      this.storageService.saveData('themeMode', 'lara-dark');
    } else {
      this.theme = 'lara-light';
      this.themeService.switchTheme(this.theme, this.darkModeStatus);
      var element = document.getElementById('body') as HTMLElement;
      element.classList.remove('dark-mode');
      this.storageService.saveData('themeMode', 'lara-light');
    }
  }

  changeIcon(event: Event) {
    if (event.type === 'mouseover') {
      if (!this.darkModeStatus) {
        this.iconMoon = true;
      } else {
        this.iconMoon = false;
      }
    }

    if (event.type === 'mouseleave') {
      if (this.darkModeStatus) {
        this.iconMoon = true;
      } else {
        this.iconMoon = false;
      }
    }
  }

}
