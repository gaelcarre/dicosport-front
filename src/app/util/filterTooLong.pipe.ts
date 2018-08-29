import { Pipe, PipeTransform } from '@angular/core';
import { Sport } from '../pojo/Sport';
@Pipe({
  name: 'filterTooLong'
})
export class FilterTooLongPipe implements PipeTransform {
  transform(items: Sport[], val: number): any[] {
    console.log(val);
    if (!items) {
       return [];
    }
    if (val < 1) {
      return items;
    }
    return items.filter( it => {
      return it.name.length >= val;
    });
  }
}
