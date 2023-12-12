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
      link: "https://www.aidpass.com",
      title: "WebApp Using Angular + Material Desing"
    },
    {
      name: "AidPass Alert",
      icon: PrimeIcons.ANDROID,
      img: 'aidPass-alert.jpeg',
      imgWidth: 150,
      imgHeight: 100,
      link: "https://play.google.com/store/apps/,details?id=com.aidpass.alertapp&pli=1",
      title: "Mobile APP using Flutter"
    },
    {
      name: "AidPass Alert for Watch",
      icon: PrimeIcons.ANDROID,
      img: 'aidpass_alert_Watch.png',
      imgWidth: 150,
      imgHeight: 100,
      link: "https://play.google.com/store/apps/,details?id=com.aidpass.alertapp&pli=1",
      title: "Mobile APP using Flutter"
    },
    {
      name: "First Responder",
      icon: PrimeIcons.APPLE,
      img: 'firstresponder-ios.jpg',
      imgWidth: 150,
      imgHeight: 100,
      link: "https://play.google.com/store/apps/,details?id=app.aidpass.firstresponder",
      title: "Mobile APP using Ionic"
    },
    {
      name: "Rest Api Countries FrontEndM",
      icon: PrimeIcons.GLOBE,
      img: 'fm-task4.png',
      imgWidth: 150,
      imgHeight: 100,
      link: "https://fm-rest-country-api.netlify.app/home",
      title: "Angular + primeNG + primeFlex"
    },
    {
      name: "MultiStep Form FrontEndM",
      icon: PrimeIcons.GLOBE,
      img: 'fm-task3.png',
      imgWidth: 150,
      imgHeight: 100,
      link: "https://fm-multi-step-form.netlify.app/",
      title: "Angular + Material + Bootstrap"
    },
    {
      name: "Notification FrontEndMentor",
      icon: PrimeIcons.GLOBE,
      img: 'fm-task2.png',
      imgWidth: 150,
      imgHeight: 100,
      link: "https://fm-notifications-page.netlify.app/",
      title: "Angular + Bootstrap"
    },
    {
      name: "QR Component FrontEndMentor",
      icon: PrimeIcons.GLOBE,
      img: 'fm-task1.png',
      imgWidth: 150,
      imgHeight: 100,
      link: "https://fm-qr-code-component-derwing.netlify.app/",
      title: "Responsive Web HTML + Tailwind"
    },
    {
      name: "UlaLovers IONIC",
      icon: PrimeIcons.GLOBE,
      img: 'ulalovers.png',
      imgWidth: 150,
      imgHeight: 100,
      link: "https://ulalovers.com/tabs/hometab",
      title: "WebApp Using Ionic + Rest Api"
    },
    {
      name: "Rómulo Betancourt",
      icon: PrimeIcons.GLOBE,
      img: 'romulobetancourt.png',
      imgWidth: 150,
      imgHeight: 100,
      link: "https://www.romulobetancourt.edu.ve",
      title: "Web using Wordpress"
    },
    {
      name: "GiftApp",
      icon: PrimeIcons.GLOBE,
      img: 'gift-app.png',
      imgWidth: 150,
      imgHeight: 100,
      link: "https://dm-gift-app.netlify.app/",
      title: "WebApp Using Angular + Rest Api"
    },
    {
      name: "Angular Pipes",
      icon: PrimeIcons.GLOBE,
      img: 'angular-pipes.png',
      imgWidth: 150,
      imgHeight: 100,
      link: "https://angular13-pipes.netlify.app/",
      title: "WebApp Using Angular + PrimeNg"
    },
    {
      name: "Angular Bases",
      icon: PrimeIcons.GLOBE,
      img: 'angular-bases.png',
      imgWidth: 150,
      imgHeight: 100,
      link: "https://angular-example.netlify.app/",
      title: "WebApp Using Angular"
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
