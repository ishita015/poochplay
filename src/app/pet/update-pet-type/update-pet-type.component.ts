import { Component, OnInit } from '@angular/core';
import { MyDataService } from './../../my-data.service';
import { FormControl, FormGroup, Validators ,NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Http,Headers,Response, RequestOptions } from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { addpet } from './../../models/addpet';
import { listremaindertype } from './../../models/listremaindertype';
import {ActivatedRoute} from '@angular/router';
import { updatepettype } from 'app/models/updatepettype';

@Component({
  templateUrl: './update-pet-type.component.html',
 })
export class UpdatePetTypeComponent {
    public addpet: object = {}
    public updatepet:any;
    isChecked = true;
    pet_id:string;
    public pet_type_id:string;
    breeds: any = {}
    display2='none'
    public imageLoader:boolean= false;
    public _Array7: listremaindertype;
    public breedcategory: any = {}
    isValidFormSubmitted = null;
    public up:any;
    public _Array3: updatepettype;
    userForm = new FormGroup({
    name : new FormControl(""),
    pet_type_id: new FormControl(""),
    status:new FormControl("true"),
 });
constructor(private apiSerivce: MyDataService, route: ActivatedRoute) 
{
  this._Array3 = new updatepettype()
  this.pet_type_id = route.snapshot.params['pet_type_id']; 
  this.editpettype();
}
ngOnInit(): void 
{
    this.apiSerivce.listpettype({'pet_type_id':''}).subscribe( 
    resultArray => this.breedcategory = resultArray, )
    this.breedcategory;
    this.userForm = new FormGroup({
          name : new FormControl("",Validators.required),
          pet_type_id: new FormControl(this.pet_type_id,Validators.required),
          status:new FormControl("",Validators.required),
          
    });
}

public updatepettype(userForm: NgForm)
{
   this.up.updatepettype(userForm.value);
}
public editpettype(){
  this.imageLoader = true;
  if(this.userForm.value.status==true){
      this.userForm.value.status = 101;
  }
  else if(this.userForm.value.status==false || this.userForm.value.status == undefined){
      this.userForm.value.status = 100;
}
 /* For Detail Pet Type Services  */ 
  this.apiSerivce.editpettype({'pet_type_id': this.pet_type_id}).subscribe( 
  resultArray =>{resultArray
  this.imageLoader = false;
  if(resultArray.list.status== "101" || resultArray.list.status== "1" ){
    resultArray.list.status = true
   }  
    else{
    resultArray.list.status = false
   }
  this.updatepet = resultArray.list
  this.userForm = new FormGroup({
      name : new FormControl(this.updatepet.name,Validators.required),
      pet_type_id: new FormControl(this.updatepet.pet_type_id,Validators.required),
      status:new FormControl(this.updatepet.status),
  });
 })
}
onSubmit(userForm){
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
  /* For Update Pet Type Services  */ 
  this.apiSerivce.updatepettype(this.userForm.value).subscribe( 
  resultArray =>{ this._Array3 = resultArray, data => { alert("Success Adding"), 
  this._Array3.message,this._Array3.error};
  this.imageLoader= false;
  const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
  this.userForm.value.pet_type_id = this.pet_type_id;
  this.display2="block";
  error =>{
    alert("Error Adding");
    console.log(error);
   }
});
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
get name() 
{
  return this.userForm.get('name');
}
get pet_type() 
{
  return this.userForm.get('pet_type_id');
}
get status() 
{
  return this.userForm.get('status');
}
hidePopup(){ 
  this.display2="none";
  // window.location.reload();
  this.imageLoader= false;    
  }
}




   

    
   
   