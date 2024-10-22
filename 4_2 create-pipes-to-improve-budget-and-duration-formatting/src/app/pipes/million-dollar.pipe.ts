import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'millionDollar',
  standalone: true
})
export class MillionDollarPipe implements PipeTransform {
  // transform(amount?: string | number): string {
  //   let range = ""+amount;
  //   let split = range?.split("-") ?? [];
  //
  //   if (split.length > 1) {
  //     range = split[0] + " to $" + split[1];
  //   }
  //   return `$${ range } million`
  // }

  transform(value: unknown): string {
    let worth: string[] = typeof value === 'string' ? value.split('-') : ['0'];

    if (worth.length > 1) {
      return `$${worth[0]} to $${worth[1]} million`;
    } else {
      return `$${worth[0]} million`;
    }
  }
}
