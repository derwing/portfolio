import { NgModule } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { CardModule } from 'primeng/card';
import { SkeletonModule } from 'primeng/skeleton';
import { TimelineModule } from 'primeng/timeline';
import { CarouselModule } from 'primeng/carousel';

@NgModule({
  declarations: [],
  imports: [
  ],
  exports: [
    MenubarModule,
    ButtonModule,
    BadgeModule,
    CardModule,
    SkeletonModule,
    TimelineModule,
    CarouselModule
  ]
})
export class PrimengModule { }
