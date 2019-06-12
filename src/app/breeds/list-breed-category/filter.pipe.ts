
import { Pipe, PipeTransform } from '@angular/core';
import { listbreedcategory } from './../../models/listbreedcategory';

@Pipe({
    name: 'listbreedcategoryFilter',
    pure: false
})
export class ListBreedCatFilter implements PipeTransform {
    transform(items: listbreedcategory[], filter: listbreedcategory): any {
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return items.filter((item: listbreedcategory) => this.applyFilter(item, filter));
    }
    applyFilter(book: listbreedcategory, filter: listbreedcategory): boolean {
    
        for (let field in filter) {
            console.log(filter[field]+"     "+book[field]+"  "+(filter[field]==book[field])+"  "+(filter[field]===book[field]))
            if(book[field]){
                if (filter[field]) {
                    if (typeof filter[field] === "string") {
                        
                      if (book[field].toString().toLowerCase().indexOf(filter[field].toString().toLowerCase()) === -1) {
                        // alert("1")
                        return false;
                      }
                    } else if (typeof filter[field] === "number") {
                      if (book[field] !== filter[field]) {
                        return false;
                      }
                    }
                    else if ( filter[field] == "date") {
                        if (book[field] !== filter[field]) {
                          return false;
                        }
                      }
                      else if ( filter[field] == "boolean") {
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