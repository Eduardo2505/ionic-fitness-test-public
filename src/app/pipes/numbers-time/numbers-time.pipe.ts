import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numbersTime'
})
export class NumbersTimePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return ( value < 10 ) ? `0${value}` : value;
  }

}
