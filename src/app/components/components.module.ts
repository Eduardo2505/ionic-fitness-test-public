import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from './course-card/course-card.component';







import { CircleProgressComponent } from './circle-progress/circle-progress.component';


@NgModule({
  declarations: [
    CourseCardComponent,
    CircleProgressComponent
  ],
  imports: [CommonModule],
  exports: [
    CourseCardComponent,
    CircleProgressComponent
  ],
})
export class ComponentsModule {}
