import { NgModule } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { CardModule } from 'primeng/card';
import { SkeletonModule } from 'primeng/skeleton';


@NgModule({
  declarations: [],
  imports: [
  ],
  exports: [
    MenubarModule,
    ButtonModule,
    BadgeModule,
    CardModule,
    SkeletonModule
  ]
})
export class PrimengModule { }
