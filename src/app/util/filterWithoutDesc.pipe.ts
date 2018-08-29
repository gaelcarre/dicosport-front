import { Pipe, PipeTransform } from '@angular/core';
import { Sport } from '../pojo/Sport';
@Pipe({
  name: 'filterWithoutDesc'
})
export class FilterWithoutDescPipe implements PipeTransform {
  transform(items: Sport[]): any[] {

    if (!items) {
       return [];
    }
    return items.filter( it => {
      return it.description == null || it.description === undefined;
    });
  }
}
