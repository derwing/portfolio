import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';



@NgModule({
  declarations: [
    EducationComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [

  ]
})
export class PagesModule { }
