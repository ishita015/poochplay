import { Pipe, PipeTransform } from '@angular/core';
import { listbreed } from './../../models/listbreed';

@Pipe({
    name: 'listbreedFilter',
    pure: false
})
export class ListBreedFilter implements PipeTransform {
    transform(items: listbreed[], filter: listbreed): any {
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return items.filter((item: listbreed) => this.applyFilter(item, filter));
    }
    applyFilter(book: listbreed, filter: listbreed): boolean {
        for (let field in filter) {
            console.log(filter[field]+"       "+(typeof filter[field])+"  "+book[field]+"  "+(filter[field]==book[field])+"  "+(filter[field]===book[field]))
            if(book[field]){
             
                if (filter[field]) {
                    if (typeof filter[field] === 'string') {
                       
                      if (book[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
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