import { TranslateService } from '@ngx-translate/core';
import { ThemeService } from './../../services/theme.service';
import { PrimeIcons } from 'primeng/api';
import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-latest-projects',
  templateUrl: './latest-projects.component.html',
  styleUrls: ['./latest-projects.component.scss']
})
export class LatestProjectsComponent implements OnInit, DoCheck {
  darkMode: boolean = false;
  lang: string = 'en';
  // Last Work 
  lastProjects = [
    {
      name: "AidPass",
      icon: PrimeIcons.GLOBE,
      img: 'AidPassWeb.png',
      imgWidth: 150,
      imgHeight: 100,
      link: "https://www.aidpass.com"
    },
    {
      name: "AidPass Alert",
      icon: PrimeIcons.ANDROID,
      img: 'aidPass-alert.jpeg',
      imgWidth: 150,
      imgHeight: 100,
      link: "https://play.google.com/store/apps/details?id=com.aidpass.alertapp&pli=1"
    },
    {
      name: "First Responder",
      icon: PrimeIcons.APPLE,
      img: 'firstresponder-ios.jpg',
      imgWidth: 150,
      imgHeight: 100,
      link: "https://play.google.com/store/apps/details?id=app.aidpass.firstresponder"
    },
    {
      name: "UlaLovers IONIC",
      icon: PrimeIcons.GLOBE,
      img: 'ulalovers.png',
      imgWidth: 150,
      imgHeight: 100,
      link: "https://ulalovers.com/tabs/hometab"
    },
    {
      name: "Rómulo Betancourt",
      icon: PrimeIcons.GLOBE,
      img: 'romulobetancourt.png',
      imgWidth: 150,
      imgHeight: 100,
      link: "https://www.romulobetancourt.edu.ve"
    },
    {
      name: "AidPass Alert",
      icon: PrimeIcons.APPLE,
      img: 'aidPass-alert.jpeg',
      imgWidth: 150,
      imgHeight: 100,
      link: "https://apps.apple.com/br/app/aidpass-alert/id1628644066"
    },
    {
      name: "First Responder",
      icon: PrimeIcons.ANDROID,
      img: 'firstresponder.jpeg',
      imgWidth: 150,
      imgHeight: 100,
      link: "https://play.google.com/store/apps/details?id=app.aidpass.firstresponder"
    },

  ];

  responsiveOptions;


  constructor(
    private ThemeService: ThemeService,
    private translate: TranslateService
  ) {
    this.responsiveOptions = this.ThemeService.responsiveOptions;
  }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    if (this.darkMode != this.ThemeService.darkMode) {
      this.darkMode = this.ThemeService.darkMode
    }

    if (this.lang != this.translate.currentLang) {
      this.lang = this.translate.currentLang;
    }
  }

}
