import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minToDuration',
  standalone: true
})
export class MinToDurationPipe implements PipeTransform {
  transform(value: number): string {
    if (!value) return '-';

    const quotient = Math.floor((value as number) / 60);
    const remainder = (value as number) % 60;
    return `${quotient}h ${remainder}min`;
  }
}
