import { Pipe, PipeTransform } from '@angular/core';
import { listfoodcompany } from './../../models/listfoodcompany';

@Pipe({
    name: 'listfoodcompanyFilter',
    pure: false
})
export class ListFoodCompanyFilter implements PipeTransform {
    transform(items: listfoodcompany[], filter: listfoodcompany): any {
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return items.filter((item: listfoodcompany) => this.applyFilter(item, filter));
    }
    applyFilter(book: listfoodcompany, filter: listfoodcompany): boolean {
        for (let field in filter) {
            console.log(filter[field]+" lfc      "+book[field]+"  "+(filter[field]==book[field])+"  "+(filter[field]===book[field]))
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