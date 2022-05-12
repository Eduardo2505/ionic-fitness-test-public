import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoursesPage } from './courses.page';

import { CoursesPageRoutingModule } from './courses-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CoursesPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [CoursesPage],
})
export class CoursesPageModule {}
