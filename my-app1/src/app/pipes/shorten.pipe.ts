import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten',
})
export class ShortenPipe implements PipeTransform {
  transform(value: any, start: number, limit: number, ...args: any[]) {
    if (value.length > limit) return value.substr(start, limit);
    return value;
  }
}
