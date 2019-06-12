import { Component, OnInit } from '@angular/core';
import { MyDataService } from './../../my-data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Http,Headers,Response, RequestOptions } from '@angular/http';
import { FormGroupName } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { listremaindertype } from './../../models/listremaindertype';
import { addremainder } from './../../models/addremainder';

@Component({
  templateUrl: './add-reminder.component.html',
  })
export class AddRemainderComponent{
  public _Array5: addremainder;
  public addremainder: any = {}
  display2='none'
  remainder: any = []
  public imageLoader:boolean= false;
  isValidFormSubmitted = null;
  public _Array7: listremaindertype;
  public breedcategory: any = {}
  userForm = new FormGroup({
      name : new FormControl(""),
      status: new FormControl(""),
  });
  constructor(private apiSerivce: MyDataService){
    this._Array5 = new addremainder()
      const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
       this.userForm.value
  }
  ngOnInit() {
     /* For List Remainder Services  */ 
    this.apiSerivce.listremaindertype({'reminder_id':''}).subscribe( 
    resultArray =>this.remainder= resultArray,)
    this.remainder;
    this.userForm = new FormGroup({
      name : new FormControl("",Validators.required),
      status:new FormControl("",Validators.required),
     });
  }
  onSubmit(userForm){
    if(this.userForm.value.name == undefined || this.userForm.value.name == '' ){
      this.isValidFormSubmitted = false;
         this.imageLoader= false;
         this.hidePopup()
  }
  else{
    if(this.userForm.value.status==true){
        this.userForm.value.status = 101;
    }
    else if(this.userForm.value.status==false || this.userForm.value.status == undefined){
        this.userForm.value.status =100;
    }
    this.imageLoader= true;
    /* For Add Remainder Services  */ 
    this.apiSerivce.addremainder(this.userForm.value).subscribe( 
    resultArray => { this._Array5 = resultArray, 
    this._Array5.message,this._Array5.error, 
    this.imageLoader=false;
    })
    console.log(this.userForm.value);
    this.display2="block";
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    this.isValidFormSubmitted = false;
    if(this.userForm.invalid){
           return;
    }
        this.isValidFormSubmitted = true;
        this._Array5= this.userForm.value;
        this.apiSerivce.addremainder(this._Array5);
        this.userForm.reset();
      }
    }
    get name() 
    {
      return this.userForm.get('name');
    }
    get status() 
    {
      return this.userForm.get('status');
    }
    hidePopup(){ 
      this.display2="none";
      this.imageLoader= false;
      // window.location.reload();  
   }

  
}




