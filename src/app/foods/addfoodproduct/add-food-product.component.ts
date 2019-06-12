import { Component, OnInit } from '@angular/core';
import { MyDataService } from './../../my-data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { listfoodproduct } from './../../models/listfoodproduct';
import { HttpClient } from '@angular/common/http';
import { Http,Headers,Response, RequestOptions } from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { addfoodproduct } from './../../models/addfoodproduct';

@Component({
  templateUrl: './add-food-product.component.html',
  
})
export class AddFoodProductComponent{
 public _Array2: addfoodproduct;
 private image:String;
 display2='none'
 display3='none';
 public addfoodproduct: object = {}
 public imageLoader:boolean= false;
 foodproduct: any = {}
 breeds: any;
 public breedcategory: any = {}
 public foodcompany: any = {}
 public images:String;
 isValidFormSubmitted = null;
 
 userForm = new FormGroup
 ({
      product_name : new FormControl(""),
      company_id: new FormControl(""),
      breed_category_id:new FormControl(""),
      breed_age_id:new FormControl(""),
      threshold:new FormControl(""),
      status:new FormControl(""),
      product_image:new FormControl(""),
      food_type:new FormControl(""),
      per_gm_kcal:new FormControl(""),
      isAudited:new FormControl("")

  });
constructor(private apiSerivce: MyDataService){
   this._Array2 = new addfoodproduct()
   this.apiSerivce.viewbreed({'offset':'0','limit':'10'}).subscribe(
    resultArray =>this.breeds = resultArray,)
 }
 ngOnInit(): void{
  this.breedcategorys();
  this.foodcompanys();
  this.userForm = new FormGroup
    ({
        product_name : new FormControl("",Validators.required),
        company_id: new FormControl("",Validators.required),
        breed_category_id:new FormControl("",Validators.required),
        breed_age_id:new FormControl("",Validators.required),
        threshold:new FormControl("",Validators.required),
        status:new FormControl("",Validators.required),
        product_image:new FormControl("",Validators.required),
        food_type:new FormControl("",Validators.required),
        per_gm_kcal:new FormControl("",Validators.required),
        isAudited:new FormControl("",Validators.required)
    });
}
onSubmit(userForm)
{
  if(this.userForm.value.product_name == undefined){
        
        this.isValidFormSubmitted = false;
         this.imageLoader= false;
         this.hidePopup()
  }
  else{
    if(this.userForm.value.isAudited==true){
        this.userForm.value.isAudited = 101;
    }
    else if(this.userForm.value.isAudited==false || this.userForm.value.isAudited == undefined){
          this.userForm.value.isAudited = 100;
    }
    
   
    if(this.userForm.value.company_status==true){
        this.userForm.value.company_status = 101;
    }
    else if(this.userForm.value.company_status==false || this.userForm.value.company_status == undefined){
          this.userForm.value.company_status = 100;
    }
    this.userForm.value.product_image = this.image;
    this.imageLoader= true;
    this.apiSerivce.addfoodproduct(this.userForm.value).subscribe( resultArray =>{ 
    this._Array2 = resultArray,this._Array2.message,this._Array2.error, this.imageLoader=false})
    this.display2="block";
    this.isValidFormSubmitted = false;
    if (this.userForm.invalid) 
    {
      return;
    }
    this.isValidFormSubmitted = true;
    this._Array2= this.userForm.value;
    this.apiSerivce.addfoodproduct(this._Array2);
    this.userForm.reset();
  }
}
 changeListener($event) : void {
    this.readThis($event.target);
 }
 readThis(inputValue: any): void {
   var file:File = inputValue.files[0];
   var myReader:FileReader = new FileReader();
   myReader.onloadend = (e) => {
    var file= this.userForm.value.product_image;
    console.log(file)
    var reg = this.userForm.value.product_image.replace(/^.*\./, '');
    console.log(reg)
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

 foodcompanys(){
    /* For List Food Company Services  */  
  this.apiSerivce.listfoodcompany({}).subscribe( resultArray => this.foodcompany = 
   resultArray )
}


      get product_name() 
      {
        return this.userForm.get('product_name');
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
      get product_image() 
      {
        return this.userForm.get('product_image');
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
      hidePopup()
      { 
  
     this.display2="none";
     this.imageLoader= false;  
     }

     breedcategorys(){
       /* For List Breed Category Services  */  
      this.apiSerivce.listbreedcategory({'breed_category_id':''}).subscribe( resultArray =>{ 
        this.breeds = resultArray,this.imageLoader= false})
        console.log(this.breeds)
    }
    listFoods(){
        /* For List Food Company Services  */  
      this.apiSerivce.listfoodcompany({'offset':'0','limit':'10'}).subscribe( 
        resultArray => this.foodcompany = resultArray, ) 
    }
    hidePopup1(){
      this.display3="none";
     }
}


 

