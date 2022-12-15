import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

import { PrimeIcons } from "primeng/api";

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {
  workExperiences = [{}];
  lang: string = '';


  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loadData();
    }, 1000);
  }

  loadData() {
    this.workExperiences = [
      {
        name: "Atlas Global Protection inc - Canada",
        rol: this.translate.instant('section3.aidpass-rol'),
        date: `${this.translate.instant('section3.since')} 11/2019 ${this.translate.instant('section3.to')} -`,
        icon: PrimeIcons.HEART,
        color: "red",
        img: 'aidpass-logo.svg',
        text: this.translate.instant('section3.aidpass-info'),
        link: "https://www.aidpass.com/home/about-us"
      },
      {
        name: "Soluciones Tecnológicas ConexVen - Venezuela",
        rol: this.translate.instant('section3.conexven-rol'),
        date: `${this.translate.instant('section3.since')} 01/2012 ${this.translate.instant('section3.to')} 11/2019`,
        icon: PrimeIcons.WIFI,
        color: "#673AB7",
        img: 'conexven-logo.png',
        text: this.translate.instant('section3.conexven-info'),
        link: "https://conexven.wixsite.com/stconexven"

      },
      {
        name: "DBACCESS - Venezuela",
        rol: this.translate.instant('section3.dbaccess-rol'),
        date: `${this.translate.instant('section3.since')} 01/2006 ${this.translate.instant('section3.to')} 12/2011`,
        icon: PrimeIcons.CODE,
        color: "#FF9800",
        img: 'dbaccess-logo.webp',
        text: this.translate.instant('section3.dbaccess-info'),
        link: "https://dbaccess.com/"
      },
      // {
      //   name: "Soluciones Tecnológicas ConexVen - Venezuela",
      //   rol: this.translate.instant('section3.conexven-rol'),
      //   date: `${this.translate.instant('section3.since')} 01/2004 ${this.translate.instant('section3.to')} 12/2005`,
      //   icon: PrimeIcons.WIFI,
      //   color: "#673AB7",
      //   img: 'conexven-logo.png',
      //   text: this.translate.instant('section3.conexven-info'),
      //   link: "https://conexven.wixsite.com/stconexven"

      // },
      {
        name: "Universidad Maritma del Caribe - Venezuela",
        rol: this.translate.instant('section3.umc-rol'),
        date: `${this.translate.instant('section3.since')} 01/1999 ${this.translate.instant('section3.to')} 11/2003`,
        icon: PrimeIcons.BOOK,
        color: "#607D8B",
        img: 'logo_umc.png',
        text: this.translate.instant('section3.umc-info'),
        link: "http://umc.edu.ve/"
      }
    ]
  }

  ngDoCheck(): void {

    if (this.lang != this.translate.currentLang) {
      this.lang = this.translate.currentLang;
      this.loadData();
    }
  }

}
