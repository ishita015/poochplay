import { Component, OnInit } from '@angular/core';
import { MyDataService } from './../../my-data.service';
import { FormControl, FormGroup, Validators, NgForm} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Http,Headers,Response, RequestOptions } from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { listremaindertype } from './../../models/listremaindertype';
import { updateremaindertype } from './../../models/updateremaindertype';
import {ActivatedRoute} from '@angular/router';

@Component({
  templateUrl: './update-reminder-type.component.html',
})
export class UpdateRemainderTypeComponent{
  public remaindertype: any = {}
  public updateremainder:any = {};
  public submitted:any;
  isChecked = true;
  isValidFormSubmitted = null;
  public reminder_id:string;
  public ur:any;
  public _Array7: listremaindertype;
  breeds: any = {}
  display2='none'
  remainder: any = {}
  public imageLoader:boolean= false;
  public _Array3:  updateremaindertype ;
  public breedcategory: any = {}
  
  userForm = new FormGroup
  ({
      reminder_id: new FormControl(""),
      name: new FormControl(""),
      status:new FormControl("true"),
   });
  constructor(private apiSerivce: MyDataService, route: ActivatedRoute) 
  {
    this._Array3 = new updateremaindertype()
      this.reminder_id= route.snapshot.params['reminder_id'];
      this.reminder_id;
      this.editremaindertype();
  }
  ngOnInit(): void{
      this.userForm = new FormGroup({
          name : new FormControl("",Validators.required),
          reminder_id: new FormControl(this.reminder_id,Validators.required),
          status:new FormControl("",Validators.required),
      });
  }
public updateremaindertype(userForm: NgForm){
    this.ur.updateremaindertype(userForm.value);
}
public editremaindertype(){
  this.imageLoader = true;
   /* For Detail Remainder Type Services  */ 
    this.apiSerivce.editremaindertype({'reminder_id': this.reminder_id}).subscribe( 
      resultArray =>{resultArray
      this.imageLoader = false;
      if(resultArray.list.status== "101" || resultArray.list.status== "1" ){
        resultArray.list.status = true
       }  
        else{
        resultArray.list.status = false
       }
      this.updateremainder = resultArray.list
      this.updateremainder;
      this.userForm = new FormGroup({
        name : new FormControl(this.updateremainder.name,Validators.required),
        reminder_id: new FormControl(this.updateremainder.reminder_id,Validators.required),
        status:new FormControl(this.updateremainder.status),
     });
  })
}
onSubmit(userForm)
{
  if(this.userForm.value.name == undefined || this.userForm.value.name == ''){
       this.isValidFormSubmitted = false;
        this.imageLoader= false;
        this.hidePopup()
  }
 else{
  if(this.userForm.value.status==true){
      this.userForm.value.status = 101;
  }
  else if(this.userForm.value.status==false){
      this.userForm.value.status = 100;
  }
  this.imageLoader= true;
   /* For Update Remainder Type Services  */ 
  this.apiSerivce.updateremaindertype(this.userForm.value).subscribe( 
  resultArray =>{ this._Array3 = resultArray, data => { alert("Success Adding"),
  this._Array3.message,this._Array3.error};
  this.imageLoader= false;
  const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
  this.userForm.value.reminder_id = this.reminder_id;
  this.display2="block";
  error =>
   {
    alert("Error Adding");
    console.log(error);
   }
  })
    this.submitted = true;
    this.isValidFormSubmitted = false;
    if (this.userForm.invalid){
        return;
    }
    this.isValidFormSubmitted = true;
    this._Array3= this.userForm.value;
    this.apiSerivce.updateremaindertype(this._Array3);
    this.userForm.reset();
  }
}
get names() 
{
  return this.userForm.get('name');
}
get reminder() 
{
  return this.userForm.get('reminder_id');
}
get statuss() 
{
  return this.userForm.get('status');
}
hidePopup(){ 
 this.display2="none";
 this.imageLoader= false;
// window.location.reload();  
 }
}

