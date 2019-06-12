import { Component, OnInit } from '@angular/core';
import { MyDataService } from './../../my-data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { listbodycondition } from './../../models/listbodycondition';
import { deletebodycondition } from './../../models/deletebodycondition';
import 'rxjs/add/operator/map'
import { FormGroupName } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { Observable } from 'rxjs/Observable';
import { ListBodyFilter } from 'app/body condition/list-body-condition/filter.pipe';

@Component({
  templateUrl: './list-body-condition.component.html',
})
// Declaration
export class ListBodyConditionComponent{
    public _Array7: listbodycondition;
    deleted:deletebodycondition;
    public filterArg:listbodycondition;
    public listbody: any = {}
    display='none';
    display2='none';
    public page:any;
    public imageLoader:boolean=false;
    Id: any;
    searchableList: any = {}


    // Constructor
    constructor(private apiSerivce: MyDataService,private router : Router) {
    this.filterArg = new listbodycondition();
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    this.imageLoader= true;
    
    /* For List Body Condition Services  */  
    this.apiSerivce.listbodycondition({'body_id':''}).subscribe( 
    resultArray =>{ this.listbody = resultArray,this.imageLoader= false})
     this.listbody;
     }
     ngOnInit()
     {
      
     }
     // Delete Function  
     public deletebodycondition(id)
     {
      this.Id = id
      this.display="block";
    }
    // Ok Button 
    onCloseHandled(id){
      this.display='none'; 
      this.display="none";
      this.display2="block";
      this.apiSerivce.deletebodycondition({"body_id":id}).subscribe( 
      resultArray => { this.listbody = resultArray,
      this.listbody.error,this.listbody.message})
      this.display="none";
  }
  // Close Button
  hidePopup()
  {  
    this.display="none";
    this.display2="none";
    this.imageLoader= false;
    // location.reload()
  }
  hidePopup1(){
    location.reload()
  }
}
   