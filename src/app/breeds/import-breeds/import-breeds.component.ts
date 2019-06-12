import { Component } from '@angular/core';
import { MyDataService } from './../../my-data.service';
@Component({
  templateUrl: './import-breeds.component.html',
  //styleUrls: ['./add-storie.component.css']
})
export class ImportBreedsComponent {

  constructor(private newService: MyDataService){}
 ngOnInit()
 {
//  this.newService.fetchData();
 }

}
