import { Pipe, PipeTransform } from '@angular/core';
import { userlist } from './../../models/userlist';

@Pipe({
    name: 'userlistFilter',
    pure: false
})
export class UserListFilter implements PipeTransform {
    transform(items: userlist[], filter: userlist): any {
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return items.filter((item: userlist) => this.applyFilter(item, filter));
    }
    applyFilter(book: userlist, filter: userlist): boolean {
        for (let field in filter) {
            console.log(filter[field]+"   ul    "+book[field]+"  "+(filter[field]==book[field])+"  "+(filter[field]===book[field]))
            if(book[field]){
                if (filter[field]) {
                    if (typeof filter[field] === 'string') {
                        console.log(book[field])
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