import { Component, OnInit } from '@angular/core';
import { MyDataService } from './../../my-data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { FormGroupName } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { addpet } from './../../models/addpet';
import { listpettype} from './../../models/listpettype';


@Component
({
  templateUrl: './add-pet.component.html',
  //styleUrls: ['./add-storie.component.css']
})
export class AddPetComponent{
public _Array4: addpet;
public addpet: any = {}
// isChecked = true;
public breedcategory: any = {}
display2='none'
// public addpet: object = {}
isValidFormSubmitted = null;
public _Array7: listpettype;
public imageLoader:boolean= false;
userForm = new FormGroup
({
    name : new FormControl(""),
    status: new FormControl(""),
});
constructor(private apiSerivce: MyDataService)
{
  this._Array4 = new addpet()
  const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
  this.userForm
}
ngOnInit(): void {
   /* For List Pet Type Services  */ 
    this.apiSerivce.listpettype({'pet_type_id':''}).subscribe( 
    resultArray => this.breedcategory = resultArray,)
    this.breedcategory;
    this.userForm = new FormGroup({
      name : new FormControl("",Validators.required),
      status:new FormControl("",Validators.required),
    });
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
     else if(this.userForm.value.status==false || this.userForm.value.status == undefined){
         this.userForm.value.status = 100;
   }
     this.imageLoader= true;
      /* For Add Pet Type Services  */ 
    this.apiSerivce.addpet(this.userForm.value).subscribe( resultArray => {
    this._Array4 = resultArray,this._Array4.message,this._Array4.error,
    this.imageLoader= false
  })
    this.userForm.value;
    this.display2="block";
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
     
     this.isValidFormSubmitted = false;
     if (this.userForm.invalid){
        return;
     }
     this.isValidFormSubmitted = true;
     this._Array4= this.userForm.value;
     this.apiSerivce.addpet(this._Array4);
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
    //  window.location.reload();
     this.imageLoader= false;    
  }
}



