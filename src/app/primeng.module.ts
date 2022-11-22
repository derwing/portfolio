import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { MenubarModule } from 'primeng/menubar';
import { NgModule } from '@angular/core';
import { SkeletonModule } from 'primeng/skeleton';
import { TimelineModule } from 'primeng/timeline';

@NgModule({
  declarations: [],
  imports: [
  ],
  exports: [
    AvatarModule,
    BadgeModule,
    ButtonModule,
    CardModule,
    CarouselModule,
    MenubarModule,
    SkeletonModule,
    TimelineModule,
  ]
})
export class PrimengModule { }
