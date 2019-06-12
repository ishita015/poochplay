import { Component, OnInit } from '@angular/core';
import { MyDataService } from './../../my-data.service';
import { FormControl, FormGroup, Validators,NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Http,Headers,Response, RequestOptions } from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { updatefoodcompany } from './../../models/updatefoodcompany';
import {ActivatedRoute} from '@angular/router';

@Component({
  templateUrl: './update-food-company.component.html',
 })
export class UpdateFoodCompanyComponent{
  
  public addfood: object = {}
  display='none'
  display2='none'
  public imageLoader:boolean= false;
  company_id:string;
  public images: boolean = false;
  public  imagenew:String="";
  public image:String="";
  public foodcompany: any = {}
  public imageHide: boolean;
  public submited:any;
  breeds: any = {}
  public ub:any;
  display3='none';
  public updatefood:any;
  public updatefoodcompany:object = {};
  isValidFormSubmitted = null;
  public _Array3: updatefoodcompany;
  
  userForm = new FormGroup({
    company_name : new FormControl(""),
    company_status: new FormControl(""),
    company_img_path:new FormControl(""),
    public_id:new FormControl(""),
});
constructor(private apiSerivce: MyDataService, route: ActivatedRoute){
  this._Array3 = new updatefoodcompany()
    this.company_id = route.snapshot.params['company_id'];
    console.log(this.company_id);
    this.editfoodcompany();
}
ngOnInit(): void{
  /* For List Food Company Services  */  
    this.apiSerivce.listfoodcompany({'company_id':''}).subscribe( resultArray => { this.foodcompany = resultArray})
    this.userForm = new FormGroup({
      company_name : new FormControl("",Validators.required),
      company_id : new FormControl(this.company_id ),
      company_status: new FormControl("",Validators.required),
      company_img_path:new FormControl("",Validators.required),
      public_id:new FormControl("",Validators.required),
    });

}
  public updatebreed(userForm: NgForm){
    this.ub.updatefoodcompany(userForm.value);
  }
  public editfoodcompany(){
    this.imageLoader = true; 
     /* For Detail Food Company Services  */  
    this.apiSerivce.editfoodcompany({'company_id': this.company_id}).subscribe( resultArray =>{console.log(resultArray)
    this.imageLoader = false;
    if(resultArray.response.company_img_path == ''){
       resultArray.response.company_img_path = 'https://cdn.evbuc.com/eventlogos/91884425/imagenotavailablegrid.jpg';
    }
    else{
    }
    
    if(resultArray.response.company_status== "101" || resultArray.response.company_status== "1" ){
      resultArray.response.company_status = true
     }  
      else{
      resultArray.response.company_status = false
     }
    this.updatefood = resultArray.response
    console.log(this.updatefood);
    this.userForm = new FormGroup({
      company_id : new FormControl(this.updatefood.company_id,Validators.required ),
      company_name  : new FormControl(this.updatefood.company_name,Validators.required),
      company_status: new FormControl(this.updatefood.company_status),
      company_img_path:new FormControl(this.updatefood.company_img_path),
      public_id:new FormControl(this.updatefood.public_id),
      imagenew: new FormControl(""),
    });
  })
  }
  
  onSubmit(){
    if(this.userForm.value.company_name== undefined || this.userForm.value.company_name==''){
        this.isValidFormSubmitted = false;
          this.imageLoader= false;
          this.hidePopup()
   }
   else{
    this.userForm.value.imagenew = this.imagenew
    if(this.userForm.value.imagenew != undefined && this.userForm.value.imagenew != ''){
    this.userForm.value.company_img_path = this.userForm.value.imagenew
    this.userForm.value.imagenew = '';
    }
    else{
      this.userForm.value.imagenew = '';
    }
    
    if(this.userForm.value.company_status==true){
        this.userForm.value.company_status = 101;
    }
    else if(this.userForm.value.company_status==false){
        this.userForm.value.company_status = 100;

    }
    this.imageLoader= true;
     /* For Update Food Company Services  */  
    this.apiSerivce.updatefoodcompany(this.userForm.value).subscribe( resultArray =>
    { this._Array3 = resultArray, data => 
     {console.log(this._Array3.message),console.log(this._Array3.error)};
    this.imageLoader= false;
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    this.display2="block";
    console.log(this._Array3.message)
    console.log(this.userForm.value),
    error => {
     }
  })
    this.submited = true;
    this.isValidFormSubmitted = false;
    if (this.userForm.invalid) 
    {
        return;
    }
    this.isValidFormSubmitted = true;
    this._Array3= this.userForm.value;
    this.apiSerivce.updatefoodcompany(this._Array3);
    this.userForm.reset();
    }
  }
  
  get company_name() 
  {
    return this.userForm.get('company_name');
  }
  get company_status() 
  {
    return this.userForm.get('company_status');
  }
  get company_img_path() 
  {
    return this.userForm.get('imagenew');
  }
  get public_id() 
  {
    return this.userForm.get('public_id');
  }
  handleFileSelect($event) : void 
  {
    this.readThis($event.target);
    this.imageHide=true;
  }
  readThis(inputValue: any): void 
  {
    var file:File = inputValue.files[0];
    var myReader:FileReader = new FileReader();
    myReader.onloadend = (e) => {
      var file= this.userForm.value.imagenew ;
      var reg = this.userForm.value.imagenew.replace(/^.*\./, '');
      if(reg=="jpg" || reg=="png" ||  reg=="jpeg"){
       this.imagenew = myReader.result;
      }
      else{
        this.display3="block";
        this.userForm.controls['imagenew'].patchValue('');
        this.imagenew='';
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
}
