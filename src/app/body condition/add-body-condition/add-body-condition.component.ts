import { Component, OnInit,Inject } from '@angular/core';
import { MyDataService } from './../../my-data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { Http,Headers,Response, RequestOptions } from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { addbodycondition } from './../../models/addbodycondition';
import { listbodycondition } from './../../models/listbodycondition';


@Component({
  templateUrl: './add-body-condition.component.html',
})

//Declaration
export class AddBodyConditionComponent{
       
 public _bodyArray: listbodycondition;
 public _Array3: addbodycondition;
 bodyconditions : any = {};
 addbodycondition:any = {};
 isValidFormSubmitted = null;
 public image:String="";
 display2='none'
 display='none'
 display3='none';
 response:string;
 error:Boolean;
 public imageLoader:boolean= false;
 userForm = new FormGroup({
  name : new FormControl(""),
  body_score: new FormControl(""),
  image:new FormControl(""),
  status:new FormControl(""),
});

// Constructor 
  constructor(private apiSerivce: MyDataService) {
    this._Array3 = new addbodycondition()
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
}

  ngOnInit(): void {
    this.apiSerivce.listbodycondition(this._bodyArray).subscribe( 
    resultArray => this.bodyconditions = resultArray,)
    this.userForm = new FormGroup({
      name : new FormControl("",Validators.required),
      body_score:new FormControl("",Validators.required),
      image:new FormControl("",Validators.required),
      status:new FormControl("",Validators.required),

    });
}

//Add ImageLoader, Validation, DialogBox Onclick  Function 
onSubmit(userForm)
{
   console.log(this.userForm.value.name)
   if(this.userForm.value.name == undefined || this.userForm.value.name == '' || this.userForm.value.body_score == undefined || this.userForm.value.body_score == '' )
   {
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
    this.userForm.value.image = this.image
    this.imageLoader= true;

    /* For Add Body Contion Services  */  
    this.apiSerivce.addbodycondition(this.userForm.value).subscribe( resultArray =>{ this._Array3 = resultArray,this.imageLoader= false;
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    });
     this.display2="block";
     console.log(this.userForm.value.status);
     this.isValidFormSubmitted = false;
     if (this.userForm.invalid){
        return;
     }
     this.isValidFormSubmitted = true;
     this._Array3= this.userForm.value;
     this.apiSerivce.addbodycondition(this._Array3);
     this.userForm.reset();
    
 }
}
 
get name() 
 {
   return this.userForm.get('name');
 }
 get body_score() 
 {
   return this.userForm.get('body_score');
 }
 get images() 
 {
   return this.userForm.get('image');
 }
 get status() 
 {
   return this.userForm.get('status');
 }

 //File Upload Function
 changeListener($event) : void 
 {
     this.readThis($event.target);
 }
 readThis(inputValue: any): void 
 {
   var file:File = inputValue.files[0];
   var myReader:FileReader = new FileReader();
   myReader.onloadend = (e) => {
    var file= this.userForm.value.image;
    console.log(file)
    var reg = this.userForm.value.image.replace(/^.*\./, '');
    console.log(reg)
    if(reg=="jpg" || reg=="png" ||  reg=="jpeg")
    {
     
      this.image = myReader.result;
    }
    else{
      this.display3="block";
      
      this.userForm.controls['image'].patchValue('');
      this.image='';
      
    
    }
 
 }
   myReader.readAsDataURL(file);
}
hidePopup(){ 
      this.display2="none";
      this.imageLoader= false; 
    }
  hidePopup1(){
    this.display3="none";
   }
   onCloseHandled(){}
   }

 

