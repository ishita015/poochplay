import { Component, OnInit } from '@angular/core';
import { MyDataService } from './../../my-data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { addfood } from './../../models/addfood';
import 'rxjs/add/operator/map'
import { FormGroupName } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { listfoodcompany } from './../../models/listfoodcompany';

@Component({
  templateUrl: './add-foods.component.html',
  
})
export class AddFoodsComponent{
  isValidFormSubmitted = null;
    public _Array1: addfood;
    public image:String="";
    public addfood: object = {}
    public foodcompany: any = {}
    public imageLoader:boolean= false;
    display2='none';
    display3='none';
    value: any;
    pic:any;
    userForm = new FormGroup({
    company_name : new FormControl(""),
    company_status: new FormControl(false),
    company_img_path: new FormControl(""),
     });
   
     constructor(private apiSerivce: MyDataService) {
       this._Array1 = new addfood()
     }
     ngOnInit(): void {
      /* For List Food Services  */  
    this.apiSerivce.listfoodcompany({'offset':'0','limit':'10'}).subscribe(
    resultArray => this.foodcompany = resultArray, ) 
    
      this.userForm = new FormGroup({
        company_name : new FormControl("",Validators.required),
        company_status: new FormControl("",Validators.required),
        company_img_path:new FormControl("",Validators.required),
      });
    }
     onSubmit(userForm)
     {
      if(this.userForm.value.company_name == undefined || this.userForm.value.company_name == '')
      {
  
           this.isValidFormSubmitted = false;
            this.imageLoader= false;
            this.hidePopup();
     }
     else{
      this.userForm.value.company_img_path = this.image;
      if(this.userForm.value.company_status==true){
          this.userForm.value.company_status = 101;
      }
      else if(this.userForm.value.company_status==false || this.userForm.value.company_status == undefined){
            this.userForm.value.company_status = 100;
      }
      this.imageLoader= true;
        /* For Add Food Services  */  
      this.apiSerivce.addfoods(this.userForm.value).subscribe( resultArray =>{ 
      this._Array1 = resultArray,this._Array1.message,this._Array1.error,this.imageLoader= false})
      this.display2="block";
      const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
      this.isValidFormSubmitted = false;
      if (this.userForm.invalid){
           return;
      }
        this.isValidFormSubmitted = true;
        this._Array1= this.userForm.value;
        this.apiSerivce.addfoods(this._Array1);
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
        var file= this.userForm.value.company_img_path;
        console.log(file)
        var reg = this.userForm.value.company_img_path.replace(/^.*\./, '');
        console.log(reg)
        if(reg=="jpg" || reg=="png" ||  reg=="jpeg"){
         this.image = myReader.result;
        }
        else{
          this.display3="block";
          this.userForm.controls['company_img_path'].patchValue('');
          this.image='';
      }
   }
   myReader.readAsDataURL(file);
}

      get company_name() 
      {
        return this.userForm.get('company_name');
      }
      get company_status() 
      {
        return this.userForm.get('company_status');
      }
      // get company_img_path() 
      // {
      //   return this.userForm.get('company_img_path');
      // }
      hidePopup(){ 
       this.display2="none";
       this.imageLoader= false;  
    //  location.reload();
     }
     hidePopup1(){
      this.display3="none";
     }
     
}
   

   