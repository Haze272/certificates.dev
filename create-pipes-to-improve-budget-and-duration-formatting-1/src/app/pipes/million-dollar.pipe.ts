import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'millionDollar',
  standalone: true
})
export class MillionDollarPipe implements PipeTransform {
  transform(value: unknown): string {
    let worth: string[] = typeof value === 'string' ? value.split('-') : [''];

    if (worth.length > 1) {
      return `$${worth[0]} to $${worth[1]} million`;
    } else {
      return `$${worth[0]} million`;
    }
  }
}
