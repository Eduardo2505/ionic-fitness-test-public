import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersTimePipe } from './numbers-time/numbers-time.pipe';

@NgModule({
  declarations: [
    NumbersTimePipe,
  ],
  imports: [CommonModule],
  exports: [
    NumbersTimePipe
  ],
})
export class PipesModule {}
