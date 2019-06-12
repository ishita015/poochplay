import { Pipe, PipeTransform } from '@angular/core';
import { listpettype } from './../../models/listpettype';

@Pipe({
    name: 'listPetFilter',
    pure: false
})
export class ListPetFilter implements PipeTransform {
    transform(items: listpettype[], filter: listpettype): any {
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return items.filter((item: listpettype) => this.applyFilter(item, filter));
    }
    applyFilter(book: listpettype, filter: listpettype): boolean {
        for (let field in filter) {
            console.log(filter[field]+"   lpt    "+book[field]+"  "+(filter[field]==book[field])+"  "+(filter[field]===book[field]))
            if(book[field]){
                if (filter[field]) {
                    if (typeof filter[field] === 'string') {
                        
                      if (book[field].toString().toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
                        return false;
                      }
                    } else if (typeof filter[field] === 'number') {
                      if (book[field] !== filter[field]) {
                        return false;
                      }
                    }
                    else if ( filter[field] == 'date') {
                        if (book[field] !== filter[field]) {
                          return false;
                        }
                      }
                      else if ( filter[field] == 'boolean') {
                        if (book[field] !== filter[field]) {
                          return false;
                        }
                      }
                  }
            }
         
        }
        return true;
      }
}