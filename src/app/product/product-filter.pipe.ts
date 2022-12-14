import { Product } from './product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: Product[], filterText?: string): Product[] 
  {
    filterText=filterText?filterText.toLocaleLowerCase():null

    return filterText?value.filter((p:Product)=>p.name
    .toLocaleLowerCase().indexOf(filterText)!==-1):value; // her bir texti küçük harfe çevir
  }

}
