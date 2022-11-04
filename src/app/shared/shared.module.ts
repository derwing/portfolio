import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// 
import { PrimengModule } from './../primeng.module';
import { TranslateModule } from '@ngx-translate/core';
// 
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    PrimengModule,
    TranslateModule
  ],
  exports: [NavbarComponent]
})
export class SharedModule { }
