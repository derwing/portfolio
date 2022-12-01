import { TranslateService } from '@ngx-translate/core';
import { ThemeService } from './../../services/theme.service';
import { Component, DoCheck, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PrimeIcons } from "primeng/api";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, DoCheck {
  video: string = "ZVKmNJpmAZI"
  darkMode: boolean = false;
  // Hero section content
  personality: string[][] = [];
  filteredPersonality: string[][] = [];
  lang: string = 'en';

  // Work experience
  events1 = [
    {
      name: "Atlas Global Protection inc - Canada",
      date: "since: 15/10/2020 to:",
      icon: PrimeIcons.HEART,
      color: "red",
      img: 'aidpass-logo.svg',
      imgWidth: 150,
      imgHeight: 50
    },
    {
      name: "Soluciones Tecnológicas ConexVen - Venezuela",
      date: "since: 15/10/2020 to:",
      icon: PrimeIcons.WIFI,
      color: "#673AB7",
      img: 'conexven-logo.png',
      imgWidth: 150,
      imgHeight: 50

    },
    {
      name: "DBACCESS - Venezuela",
      date: "since: 15/10/2020 to:",
      icon: PrimeIcons.CODE,
      color: "#FF9800",
      img: 'dbaccess-logo.webp',
      imgWidth: 150,
      imgHeight: 50
    },
    {
      name: "Universidad Maritma del Caribe - Venezuela",
      date: "16/10/2020 10:00",
      icon: PrimeIcons.BOOK,
      color: "#607D8B",
      img: 'logo_umc.png',
      imgWidth: 80,
      imgHeight: 80
    }
  ];

  // Last Work 
  lastworks = [
    {
      name: "AidPass.com",
      date: "since: 15/10/2020 to:",
      icon: PrimeIcons.HEART,
      color: "red",
      img: 'AidPassWeb.png',
      imgWidth: 150,
      imgHeight: 100
    },
    {
      name: "Atlas Global Protection inc - Canada",
      date: "since: 15/10/2020 to:",
      icon: PrimeIcons.HEART,
      color: "red",
      img: 'AidPassWeb.png',
      imgWidth: 150,
      imgHeight: 50
    },
    {
      name: "Atlas Global Protection inc - Canada",
      date: "since: 15/10/2020 to:",
      icon: PrimeIcons.HEART,
      color: "red",
      img: 'AidPassWeb.png',
      imgWidth: 150,
      imgHeight: 50
    },
    {
      name: "Atlas Global Protection inc - Canada",
      date: "since: 15/10/2020 to:",
      icon: PrimeIcons.HEART,
      color: "red",
      img: 'AidPassWeb.png',
      imgWidth: 150,
      imgHeight: 50
    },
  ];

  // Recomendations Section
  recomendations = [
    {
      name: "Derwing Medina",
      charge: "CEO of xxx",
      icon: PrimeIcons.HEART,
      color: "red",
      img: 'AvatarPro.png',
      review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
      name: "Fulano de tal",
      charge: "CEO of xxx",
      icon: PrimeIcons.HEART,
      color: "red",
      img: 'AvatarPro.png',
      review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
      name: "Fulano de tal",
      charge: "CEO of xxx",
      icon: PrimeIcons.HEART,
      color: "red",
      img: 'Avatar.jpg',
      review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
      name: "Fulano de tal",
      charge: "CEO of xxx",
      icon: PrimeIcons.HEART,
      color: "red",
      img: 'AvatarPro.png',
      review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
    }
  ];

  responsiveOptions;

  constructor(
    private _sanitizer: DomSanitizer,
    private ThemeService: ThemeService,
    private translate: TranslateService
  ) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.randownPersonality();
    }, 1000);


  }

  ngDoCheck(): void {
    if (this.darkMode != this.ThemeService.darkMode) {
      this.darkMode = this.ThemeService.darkMode
    }

    if (this.lang != this.translate.currentLang) {
      this.lang = this.translate.currentLang;
      this.randownPersonality();
    }

  }

  getVideoIframe(url: string) {
    var video, results;

    if (url === null) {
      return '';
    }
    results = url.match('[\\?&]v=([^&#]*)');
    video = (results === null) ? url : results[1];

    return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);
  }

  randownPersonality() {
    this.filteredPersonality = [];
    this.personality = [
      [this.translate.instant('home.hero-section.curius'), this.translate.instant('home.hero-section.behavior'), this.translate.instant('home.hero-section.using-for')],
      [this.translate.instant('home.hero-section.reliability'), this.translate.instant('home.hero-section.value'), this.translate.instant('home.hero-section.focus-business')],
      [this.translate.instant('home.hero-section.highworkethics'), this.translate.instant('home.hero-section.value'), this.translate.instant('home.hero-section.non-negotiable')],
      [this.translate.instant('home.hero-section.commonsense'), this.translate.instant('home.hero-section.behavior'), this.translate.instant('home.hero-section.common-sense-info')]
    ];
    const numbers = [];
    const n1 = Math.floor(Math.random() * 4);
    const n2 = Math.floor(Math.random() * 4);
    while (n1 === n2) {
      this.randownPersonality();
      return;
    }
    numbers.push(n1, n2);
    this.filteredPersonality.push(this.personality[n1], this.personality[n2]);
  }


}
