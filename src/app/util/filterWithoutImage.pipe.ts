import { Pipe, PipeTransform } from '@angular/core';
import { Sport } from '../pojo/Sport';
@Pipe({
  name: 'filterWithoutImage'
})
export class FilterWithoutImagePipe implements PipeTransform {
  transform(items: Sport[]): any[] {

    if (!items) {
       return [];
    }
    return items.filter( it => {
      return it.image == null || it.image === undefined;
    });
  }
}
