import { Pipe, PipeTransform } from '@angular/core';
import { Sport } from '../pojo/Sport';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: Sport[], searchText: string): any[] {

    if (!items) {
       return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
    // console.log(searchText);
    return items.filter( it => {
      // console.log(searchText, it.name, it.name.includes(searchText));
      return it.name.toLowerCase().includes(searchText);
    });
  }
}
