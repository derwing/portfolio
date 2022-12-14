import { HomeComponent } from './home/home.component';
import { WorkAreasComponent } from './work-areas/work-areas.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { LatestProjectsComponent } from './latest-projects/latest-projects.component';
import { LatestCoursesComponent } from './latest-courses/latest-courses.component';
import { RecomendationsComponent } from './recomendations/recomendations.component';
import { ProductsComponent } from './products/products.component';



@NgModule({
  declarations: [
    EducationComponent,
    ProjectsComponent,
    WorkAreasComponent,
    HomeComponent,
    WorkExperienceComponent,
    LatestProjectsComponent,
    LatestCoursesComponent,
    RecomendationsComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    // WorkAreasComponent,
    // WorkExperienceComponent
  ]
})
export class PagesModule { }
