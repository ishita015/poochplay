import { Component } from '@angular/core';
import { MyDataService } from './../../my-data.service';
@Component({
  templateUrl: './all-foods.component.html',
  //styleUrls: ['./add-storie.component.css']
})
export class AllFoodsComponent {

  constructor(private newService: MyDataService){}
 ngOnInit()
 {
//  this.newService.fetchData();
 }
}
