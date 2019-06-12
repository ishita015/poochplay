// import { Pipe, PipeTransform } from '@angular/core';
// @Pipe({
//   name: 'filter'
// })
// export class Filters implements PipeTransform {
//   transform(value: any, input: string, searchableList: any) {
//     if (input) {
//         input = input.toLowerCase();
//         return value.filter(function (el: any) {
//             var isTrue = false;
//             for (var k in searchableList) {
//                 if (el[searchableList[k]].toLowerCase().indexOf(input) > -1) {
//                     isTrue = true;
//                 }
//                 if (isTrue) {
//                     return el
//                 }
//             }
//         })
//     }
//     return value;
// }
// }
import { Pipe, PipeTransform } from '@angular/core';
import { listremaindertype } from './../../models/listremaindertype';

@Pipe({
    name: 'listRemainderFilter',
    pure: false
})
export class ListRemainderFilter implements PipeTransform {
    transform(items: listremaindertype[], filter: listremaindertype): any {
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return items.filter((item: listremaindertype) => this.applyFilter(item, filter));
    }
    applyFilter(book: listremaindertype, filter: listremaindertype): boolean {
        for (let field in filter) {
            console.log(filter[field]+"   lrt    "+book[field]+"  "+(filter[field]==book[field])+"  "+(filter[field]===book[field]))
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