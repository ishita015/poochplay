import { Component, OnInit } from '@angular/core';
import { MyDataService } from './../../my-data.service';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Http,Headers,Response, RequestOptions } from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { updatefoodproduct } from './../../models/updatefoodproduct';

@Component({
  templateUrl: './update-food-product.component.html',
})
export class UpdateFoodProductComponent{
    public _Array3: updatefoodproduct;
    public updatefoodproduct : object = {}
    isValidFormSubmitted = null;
    public image:String="";
    display2='none';
    display3='none';
    public ub:any;
    product_id:string;
    public imageHide: boolean;
    public imageLoader:boolean= false;
    public foodproduct: any = {}
    public updateproduct:any = {};
    public breeds: any = []
    public foodcompany: any = {}

  
    userForm = new FormGroup({
    product_id:new FormControl(""),
    product_name : new FormControl(""),
    company_id: new FormControl(""),
    breed_category_id:new FormControl(""),
    breed_age_id:new FormControl(""),
    threshold:new FormControl(""),
    status:new FormControl(""),
    product_image:new FormControl(""),
    public_id:new FormControl(""),
    food_type:new FormControl(""),
    per_gm_kcal:new FormControl(""),
    isAudited:new FormControl("")
  });

  constructor(private apiSerivce: MyDataService, route: ActivatedRoute) {
    this.product_id = route.snapshot.params['product_id'];
    this._Array3 = new updatefoodproduct()
    this.product_id;
    this.editfoodproduct();
}

ngOnInit(): void{
    this.breedcategory()
    this.foodcompanys()
     /* For List Food Product Services  */  
    this.apiSerivce.listfoodproduct({'product_id':''}).subscribe( 
    resultArray => this.foodproduct = resultArray)
    this.foodproduct;
    this.imageLoader= false
    this.userForm = new FormGroup({
      product_name : new FormControl("",Validators.required),
      company_id: new FormControl("",Validators.required),
      breed_category_id:new FormControl("",Validators.required),
      breed_age_id:new FormControl("",Validators.required),
      threshold:new FormControl("",Validators.required),
      status:new FormControl("",Validators.required),
      product_image:new FormControl("",Validators.required),
      public_id:new FormControl("",Validators.required),
      food_type:new FormControl("",Validators.required),
      per_gm_kcal:new FormControl("",Validators.required),
      isAudited:new FormControl("",Validators.required)
    });
  }
  public updatebreed(userForm: NgForm){
    this.ub.updatefoodproduct(userForm.value);
  }

  public editfoodproduct(){
    this.imageLoader = true;
    this.apiSerivce.editfoodproduct({'product_id': this.product_id})
   .subscribe( resultArray =>{resultArray
    this.imageLoader = false;
    if(resultArray.response.product_image == ''){
       
    }
    else{
    }
    if(resultArray.response.status== "101" || resultArray.response.status== "1" ){
      resultArray.response.status = true
     }  
      else{
      resultArray.response.status = false
     }
      this.updateproduct = resultArray.response
      this.updateproduct;
      this.userForm = new FormGroup({
      product_id  : new FormControl(this.updateproduct.product_id,Validators.required ),
      product_name: new FormControl(this.updateproduct.product_name,Validators.required),
      company_id:new FormControl(this.updateproduct.company_id,Validators.required),
      breed_category_id:new FormControl(this.updateproduct.breed_category_id),
      breed_age_id:new FormControl(this.updateproduct.breed_age_id),
      threshold:new FormControl(this.updateproduct.threshold),
      status:new FormControl(this.updateproduct.status),
      product_image:new FormControl(""),
      food_type:new FormControl(this.updateproduct.food_type),
      per_gm_kcal:new FormControl(this.updateproduct.per_gm_kcal),
      isAudited:new FormControl(this.updateproduct.isAudited),
    });
  })
  }

  readThis(inputValue: any): void{
    var file:File = inputValue.files[0];
    var myReader:FileReader = new FileReader();
    myReader.onloadend = (e) => {
    var file= this.userForm.value.product_image ;
    var reg = this.userForm.value.product_image.replace(/^.*\./, '');
     if(reg=="jpg" || reg=="png" ||  reg=="jpeg"){
        this.image = myReader.result;
      }
      else{
        this.display3="block";
        this.userForm.controls['product_image'].patchValue('');
        this.image='';
       }
  }
    myReader.readAsDataURL(file);
}
 
  onSubmit(userForm){
    this.userForm.value.product_image=this.image;
    console.log(this.userForm.value.product_image)
    if(this.userForm.value.product_name == undefined || this.userForm.value.product_name == '' || this.userForm.value.company_id == '' || this.userForm.value. breed_category_id == '' ){

         this.isValidFormSubmitted = false;
          this.imageLoader= false;
          this.hidePopup()
    }
   else{  
    this.userForm.value.image = this.image
    if(this.userForm.value.image != undefined && this.userForm.value.image != ''){
    this.userForm.value.product_image = this.userForm.value.image
    }
    else{
     }
    if(this.userForm.value.isAudited==true){
        this.userForm.value.isAudited = 101;
    }
    else if(this.userForm.value.isAudited==false){
        this.userForm.value.isAudited = 100;

    }
    if(this.userForm.value.status==true){
        this.userForm.value.status = 101;
    }
    else if(this.userForm.value.status==false){
        this.userForm.value.status = 100;

    }
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    this.imageLoader= true;
    /* For Update Food Product Services  */  
    this.apiSerivce.updatefoodproduct(this.userForm.value).subscribe(
    resultArray => {this._Array3 = resultArray, data => { 
    this._Array3.message,this._Array3.error },this.imageLoader= false});
    this.display2="block";
    this.userForm.value;
    this.userForm.value.product_id = this.product_id;
    this._Array3;
    this.userForm.value,
     error => {
       error;
     }
  this.isValidFormSubmitted = false;
  if (this.userForm.invalid){
     return;
  }
  this.isValidFormSubmitted = true;
  this._Array3= this.userForm.value;
  this.apiSerivce.updatefoodproduct(this._Array3);
  this.userForm.reset();
  }
}
breedcategory(){
   /* For List Breed Category Services  */  
  this.apiSerivce.listbreedcategory({'breed_category_id':''}).subscribe( resultArray =>{ 
    this.breeds = resultArray,this.imageLoader= false})
    console.log(this.breeds)
}
foodcompanys(){
   /* For List Food Company Services  */  
  this.apiSerivce.listfoodcompany({}).subscribe( 
    resultArray => this.foodcompany = resultArray )
}
get product_name() 
  {
    return this.userForm.get('product_name');
  }
  get productid() 
  {
    return this.userForm.get('product_id');
  }
  get company_id() 
  {
    return this.userForm.get('company_id');
  }
  get breed_category_id() 
  {
    return this.userForm.get('breed_category_id');
  }
  get breed_age_id() 
  {
    return this.userForm.get('breed_age_id');
  }
  get threshold() 
  {
    return this.userForm.get('threshold');
  }
  get status() 
  {
    return this.userForm.get('status');
  }
  get food_type() 
  {
    return this.userForm.get('food_type');
  } 
  get per_gm_kcal() 
  {
    return this.userForm.get('per_gm_kcal');
  } 
  get isAudited() 
  {
    return this.userForm.get('isAudited');
  }
  get product_image() 
  {
    return this.userForm.get('image');
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

hidePopup(){ 
    this.display2="none";
    this.imageLoader= false;    
  }
  hidePopup1(){
    this.display3="none";
   }
}
