import { Pipe, PipeTransform } from '@angular/core';
import { Sport } from '../pojo/Sport';
@Pipe({
  name: 'filterWithoutCategory'
})
export class FilterWithoutCategoryPipe implements PipeTransform {
  transform(items: Sport[]): any[] {

    if (!items) {
       return [];
    }
    // console.log(searchText);
    return items.filter( it => {
      return it.categories === null;
    });
  }
}
