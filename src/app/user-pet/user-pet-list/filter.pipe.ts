import { Pipe, PipeTransform } from '@angular/core';

import { userpetlist } from './../../models/userpetlist';

@Pipe({
    name: 'userpetlistFilter',
    pure: false
})
export class UserPetListFilter implements PipeTransform {
    transform(items: userpetlist[], filter: userpetlist): any {
        if (!items || !filter) {
            return items;
        }
       return items.filter((item: userpetlist) => this.applyFilter(item, filter));
    }
    applyFilter(book: userpetlist, filter: userpetlist): boolean {
        for (let field in filter) {
            console.log(filter[field]+"   upl    "+book[field]+"  "+(filter[field]==book[field])+"  "+(filter[field]===book[field]))
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