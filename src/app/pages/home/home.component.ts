import { TranslateService } from '@ngx-translate/core';
import { ThemeService } from './../../services/theme.service';
import { Component, DoCheck, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, DoCheck {
  darkMode: boolean = false;
  // Hero section content
  personality: string[][] = [];
  filteredPersonality: string[][] = [];
  lang: string = 'en';

  // setup section
  adBlocker: boolean = false;

  constructor(
    private ThemeService: ThemeService,
    private translate: TranslateService,
  ) {

  }

  ngOnInit(): void {
    setTimeout(() => {
      this.loadData();
    }, 1000);
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
    this.adBlocker = this.ThemeService.adBlocker
  }



}
