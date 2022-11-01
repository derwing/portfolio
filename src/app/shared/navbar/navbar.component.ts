import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  darkModeStatus: boolean = false;

  items: MenuItem[] = [
    {
      label: 'Projects',
      icon: 'pi pi-fw pi-desktop',
    },
    {
      label: 'Education',
      icon: 'pi pi-fw pi-book',
    },
    {
      label: 'GitHub',
      icon: 'pi pi-fw pi-github',
      items: [
        { label: 'Angular', icon: 'fa-brands fa-angular', iconClass: 'fa-brands fa-angular' },
        { label: 'Ionic', icon: 'pi pi-fw pi-refresh' }
      ]
    },
  ];

  constructor() { }

  ngOnInit(): void {


  }

  darkMode() {
    this.darkModeStatus = !this.darkModeStatus;
  }

}
