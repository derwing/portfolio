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

  // Work experiences
  workExperiences = [{}];

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

  // Lates courses
  latesCourses = [
    {
      name: 'Responsive Web Desing',
      img: 'fcc-webdesing.png',
      imgWidth: 150,
      imgHeight: 150
    },
    {
      name: 'Dart',
      img: 'dart.png',
      imgWidth: 150,
      imgHeight: 150
    },
    {
      name: 'Angular 14',
      img: 'angular.png',
      imgWidth: 150,
      imgHeight: 150
    },
    {
      name: 'Ionic',
      img: 'ionic-framework.jpg',
      imgWidth: 150,
      imgHeight: 150
    },
    {
      name: 'JavaScript',
      img: 'java-script.jpg',
      imgWidth: 150,
      imgHeight: 150
    },
  ]

  display: boolean = false;
  activeCourse: string = '';
  activeCourseName: string = '';


  // Recomendations Section
  recomendationActive: boolean = false;
  recomendationName: string = '';
  recomendationImg: string = '';
  recomendationReview: string = '';
  recomendationCompany: string = '';

  recomendations = [
    {
      name: "Juan Bustamante",
      charge: "Member of Technical Staff 2",
      company: 'www.VMware.com',
      color: "red",
      img: 'juan-bustamante.png',
      review: "I've been working with Derwing for almost 15 years, he has an insatiable desire to learn, and he demonstrated this by improving his skills as a web developer, even though he came from an infrastructure background. His skills as an entrepreneur are also proven. For all this, Derwing is a valuable member of any IT team and you can only expect the best from him. Derwing’s personality is also impressive. He acts with generosity and compassion and is well-respected by his peers. He is a natural leader and was such a joy to have on my team.",
    },
    {
      name: "Maria Alejandra Linares",
      charge: "Product Owner - Rapid Ratings - Ireland",
      company: 'www.rapidratings.com',
      img: 'mariale.png',
      review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
      reviewExplain: 'xxxx',

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

  // setup section
  adBlocker: boolean = false;


  constructor(
    private _sanitizer: DomSanitizer,
    private ThemeService: ThemeService,
    private translate: TranslateService,
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
      this.loadData();
    }, 1000);
  }

  openRecomendation(recomendation: any) {
    this.recomendationImg = recomendation.img;
    this.recomendationName = recomendation.name;
    this.recomendationReview = recomendation.review;
    this.recomendationActive = true;
    this.recomendationCompany = recomendation.company;
  }

  ngDoCheck(): void {
    if (this.darkMode != this.ThemeService.darkMode) {
      this.darkMode = this.ThemeService.darkMode
    }

    if (this.lang != this.translate.currentLang) {
      this.lang = this.translate.currentLang;
      this.loadData();
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

  loadData() {
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
      this.loadData();
      return;
    }
    numbers.push(n1, n2);
    this.filteredPersonality.push(this.personality[n1], this.personality[n2]);


    this.workExperiences = [
      {
        name: "Atlas Global Protection inc - Canada",
        rol: this.translate.instant('section3.aidpass-rol'),
        date: `${this.translate.instant('section3.since')} 15/10/2020 ${this.translate.instant('section3.to')} 30/1/2023`,
        icon: PrimeIcons.HEART,
        color: "red",
        img: 'aidpass-logo.svg',
        text: this.translate.instant('section3.aidpass-info'),
        link: "https://www.aidpass.com/home/about-us"
      },
      {
        name: "Soluciones Tecnológicas ConexVen - Venezuela",
        rol: this.translate.instant('section3.conexven-rol'),
        date: `${this.translate.instant('section3.since')} 15/10/2020 ${this.translate.instant('section3.to')} 15/10/2020`,
        icon: PrimeIcons.WIFI,
        color: "#673AB7",
        img: 'conexven-logo.png',
        text: this.translate.instant('section3.conexven-info'),
        link: "https://conexven.wixsite.com/stconexven"

      },
      {
        name: "DBACCESS - Venezuela",
        rol: this.translate.instant('section3.dbaccess-rol'),
        date: `${this.translate.instant('section3.since')} 15/10/2020 ${this.translate.instant('section3.to')} 15/10/2020`,
        icon: PrimeIcons.CODE,
        color: "#FF9800",
        img: 'dbaccess-logo.webp',
        text: this.translate.instant('section3.dbaccess-info'),
        link: "https://dbaccess.com/"
      },
      {
        name: "Universidad Maritma del Caribe - Venezuela",
        rol: this.translate.instant('section3.umc-rol'),
        date: `${this.translate.instant('section3.since')} 15/10/2020 ${this.translate.instant('section3.to')} 15/10/2020`,
        icon: PrimeIcons.BOOK,
        color: "#607D8B",
        img: 'logo_umc.png',
        text: this.translate.instant('section3.umc-info'),
        link: "http://umc.edu.ve/"
      }
    ]

    this.adBlocker = this.ThemeService.adBlocker
  }

  openPreview(img: string, name: string) {
    this.display = true;
    this.activeCourse = img;
    this.activeCourseName = name;
  }

}
