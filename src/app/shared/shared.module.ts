import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// 
import { PrimengModule } from './../primeng.module';
// 
import { NavbarComponent } from './navbar/navbar.component';

// Translation
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    PrimengModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  exports: [NavbarComponent, PrimengModule, TranslateModule]
})
export class SharedModule { }

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}