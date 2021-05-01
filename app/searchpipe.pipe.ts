import { Pipe, PipeTransform } from '@angular/core';
import { Grocery } from './models/grocery';

@Pipe({
  name: 'searchfilter'
})
export class SearchpipePipe implements PipeTransform {

  transform(grocery: Grocery[], searchValue:string): Grocery[]{
    if(!grocery || !searchValue){
      return grocery;
    }
    return grocery.filter(dataname =>
      dataname.groceryName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }

}
