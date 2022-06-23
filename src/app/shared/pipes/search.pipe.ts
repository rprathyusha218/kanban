import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], field: string, value: string): any[] {
    console.log(items)
    if (!items) return [];
    if (!value) return items;

    return items.filter(str => {
      return str[field].toLowerCase().includes(value.toLowerCase());
    });
  }

}
