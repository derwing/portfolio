import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';



@NgModule({
  declarations: [
    HomeComponent,
    EducationComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
