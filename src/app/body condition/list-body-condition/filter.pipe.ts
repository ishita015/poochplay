import { Pipe, PipeTransform } from '@angular/core';
import { listbodycondition } from 'app/models/listbodycondition';

@Pipe({
    name: 'listBodyFilter',
    pure: false
})
export class ListBodyFilter implements PipeTransform {
    transform(items: listbodycondition[], filter: listbodycondition): any {
        if (!items || !filter) {
            return items;
        }
        return items.filter((item: listbodycondition) => this.applyFilter(item, filter));
    }
    applyFilter(book: listbodycondition, filter: listbodycondition): boolean {
        for (let field in filter) {
            console.log(filter[field]+"     "+book[field]+"  "+(filter[field]==book[field])+"  "+(filter[field]===book[field]))
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
