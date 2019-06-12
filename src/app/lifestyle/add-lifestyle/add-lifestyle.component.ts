import { Component, OnInit } from '@angular/core';
import { MyDataService } from './../../my-data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { Http,Headers,Response, RequestOptions } from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { addlifestyle } from './../../models/addlifestyle';
import { listlifestyle } from './../../models/listlifestyle';

@Component({
  templateUrl: './add-lifestyle.component.html',
  
})
export class AddLifeStyleComponent{
 public _Array6: addlifestyle;
 public _Array7: listlifestyle;
 display2='none'
 lifestyles:any = {};
 public imageLoader:boolean= false;
 isValidFormSubmitted = null;
 public addlifestyle: object = {}
 private image:String="";
 
 userForm = new FormGroup({
  name : new FormControl(""),
  status: new FormControl(""),
});

  constructor(private apiSerivce: MyDataService) {
    this._Array6 = new  addlifestyle()
   }
   ngOnInit(): void {
    /* For List Life Style Services  */ 
    this.apiSerivce.listlifestyle({'lifestyle_id':''}).subscribe( 
    resultArray => this.lifestyles = resultArray,)
    this._Array7  
    this.userForm = new FormGroup({
        name : new FormControl("",Validators.required),
        status: new FormControl("",Validators.required),
     });
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
      else if(this.userForm.value.status==false || this.userForm.value.status == undefined){
          this.userForm.value.status = 100;
  
      }
        this.userForm.value.image_path = this.image;
        this.imageLoader= true;
         /* For Add Life Style Services  */ 
        this.apiSerivce.addlifestyle(this.userForm.value).subscribe( 
        resultArray =>{ this._Array6 = resultArray,this._Array6.message,
        this._Array6.error,this.imageLoader= false})
        this.display2="block";
        this.userForm.value;
        const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        this.isValidFormSubmitted = false;
        if (this.userForm.invalid){
           return;
        }
        this.isValidFormSubmitted = true;
        this. _Array6= this.userForm.value;
        this.apiSerivce.addlifestyle(this._Array6);
        this.userForm.reset();
      }
    }
     changeListener($event) : void{
        this.readThis($event.target);
     }
      readThis(inputValue: any): void {
      var file:File = inputValue.files[0];
      var myReader:FileReader = new FileReader();
      myReader.onloadend = (e) => {
      this.image = myReader.result;
   }
   myReader.readAsDataURL(file);
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
     }
}

