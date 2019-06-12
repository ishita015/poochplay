import { Component, OnInit } from '@angular/core';
import { MyDataService } from './../../my-data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { listremaindertype } from './../../models/listremaindertype';
import 'rxjs/add/operator/map'
import { deleteremainder } from './../../models/deleteremainder';
import { FormGroupName } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { ListRemainderFilter } from 'app/remainder type/list-reminder-type/filter.pipe';
import { Router } from '@angular/router';

@Component({
  templateUrl: './list-reminder-type.component.html',
})
export class ListRemainderTypeComponent
{
  public addremainder: object = {}
  remainder: any = {}
  public imageLoader:boolean= false;
  breedcategory: any = {}
  display='none';
  display2='none';
  Id: any;
  public page:any;
  public filterArg:listremaindertype;
  deleted:deleteremainder;
  public _Array7: listremaindertype;
  constructor(private apiSerivce: MyDataService,private route:Router){
    this.breedcategory = new listremaindertype()
    this.filterArg =new listremaindertype();
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    this.imageLoader= true;

    /* For List Remainder Type Services  */ 
    this.apiSerivce.listremaindertype({'reminder_id':''}).subscribe( resultArray => {
    this.remainder= resultArray,this.imageLoader= false
    })
    this._Array7
   }
   ngOnInit(): void{
     
  }
  public deleteremainder(id)
    {
      this.Id = id
      this.display="block"; 
    }
    onCloseHandled(id){
      this.display="none";
      this.display2="block";
      /* For Delete Remainder Type Services  */ 
      this.apiSerivce.deleteremainder({"reminder_id":id}).subscribe(
      resultArray =>{ this.breedcategory = resultArray,this.breedcategory.error,
      this.breedcategory.message})
      this.display='none'; 
  }
    hidePopup(){ 
       this.display="none";
       this.display2="none";
      //  location.reload()
    }
    hidePopup1(){
      // location.reload();
      // alert(1);
      this.route.navigate(['/remaindertype/list-remainder-type1/'])
    }
    onSubmit(){
      
    }
}
   