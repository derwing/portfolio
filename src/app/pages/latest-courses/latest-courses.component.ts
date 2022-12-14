import { ThemeService } from './../../services/theme.service';
import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-latest-courses',
  templateUrl: './latest-courses.component.html',
  styleUrls: ['./latest-courses.component.scss']
})
export class LatestCoursesComponent implements DoCheck {
  darkMode: boolean = false;

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
    {
      name: 'JavaScript Fundamentals',
      img: 'js-fundamentals-grasshopper.png',
      imgWidth: 150,
      imgHeight: 150
    },
    {
      name: 'JavaScript Fundamentals II',
      img: 'js-fundamentals2-grasshopper.png',
      imgWidth: 150,
      imgHeight: 150
    },
    {
      name: 'JavaScript Arrays',
      img: 'js-arrays-grasshopper.png',
      imgWidth: 150,
      imgHeight: 150
    },
    {
      name: 'JavaScript Animations',
      img: 'js-animations-grasshopper.png',
      imgWidth: 150,
      imgHeight: 150
    },
    {
      name: 'Programming Logic',
      img: 'programming.png',
      imgWidth: 150,
      imgHeight: 150
    },
    {
      name: 'Google Web Development',
      img: 'GoogleActivateIntroProgramming.jpeg',
      imgWidth: 150,
      imgHeight: 150
    },
    {
      name: 'ESET RA',
      img: 'eset-remote-administrator.jpeg',
      imgWidth: 150,
      imgHeight: 150
    },
    {
      name: 'ESET Server Solutions',
      img: 'eset-server-solutions.jpeg',
      imgWidth: 150,
      imgHeight: 150
    },
    {
      name: 'ESET Sales SA',
      img: 'sales-sa.png',
      imgWidth: 150,
      imgHeight: 150
    },
  ]

  display: boolean = false;
  activeCourse: string = '';
  activeCourseName: string = '';

  responsiveOptions;



  constructor(
    private ThemeService: ThemeService
  ) {
    this.responsiveOptions = this.ThemeService.responsiveOptions;
  }

  ngDoCheck(): void {
    if (this.darkMode != this.ThemeService.darkMode) {
      this.darkMode = this.ThemeService.darkMode
    }
  }

  openPreview(img: string, name: string) {
    this.display = true;
    this.activeCourse = img;
    this.activeCourseName = name;
  }

}
