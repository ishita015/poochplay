import { Component, OnInit } from '@angular/core';
import { MyDataService } from './../../my-data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { listpettype} from './../../models/listpettype';
import 'rxjs/add/operator/map'
import { FormGroupName } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { deletepettype } from './../../models/deletepettype';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { ListPetFilter } from 'app/pet/list-pet-type/filter.pipe';

@Component({
  templateUrl: './list-pet-type.component.html',
})
export class ListPetTypeComponent{
  display='none'
  display2='none'
  Id: any;
  deleted:deletepettype;
  public imageLoader:boolean= false;
   public filterArg:listpettype;
  characters: Observable<any>
  public _Array7: listpettype;
  listpet: any = {}
  public page:any;
  constructor(private apiSerivce: MyDataService) {
    this.listpet = new listpettype()
    this.filterArg =new listpettype();
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
    this.imageLoader= true;
    /* For List Pet Type Services  */ 
    this.apiSerivce.listpettype({'pet_type_id':''}).subscribe( resultArray => {
    this.listpet = resultArray,this.imageLoader= false
  })
}
ngOnInit(){
}
public deletepettype(id){
  this.Id = id
  this.display="block"; 
}
onCloseHandled(id){
  this.display="none";
  this.display2="block";
  this.apiSerivce.deletepettype({"pet_type_id":id}).subscribe( resultArray =>{ 
  this.listpet = resultArray,this.listpet.message,this.listpet.error})
  this.display='none'; 
}

hidePopup(){  
this.display="none";
this.display2="none";
// location.reload()
}
hidePopup1(){
  location.reload();
 }
 onSubmit(){}
}
   