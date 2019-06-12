import { Component, OnInit } from '@angular/core';
import { MyDataService } from './../../my-data.service';
import { FormControl, FormGroup, Validators ,NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Http,Headers,Response, RequestOptions } from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { addbreed } from './../../models/addbreed';
import { listbreedcategory } from './../../models/listbreedcategory';

@Component({
  templateUrl: './add-breeds.component.html',

})

export class AddBreedsComponent{
  isValidFormSubmitted = null;
  public _Array: addbreed;
  public breedcategory: any = {}

  public image:String="";
  public msg:String="";

  display3='none';
  public _Array7: listbreedcategory;
  public addb: object = {}
  public imageLoader:boolean= false;

  display2='none'
  display: boolean = false;
  public breed_id:string;
  userForm = new FormGroup({
  breed_name : new FormControl(""),

  origin:new FormControl(""),
  life_span:new FormControl(""),
  weight_male:new FormControl(""),
  weight_female:new FormControl(""),
  height_male:new FormControl(""),
  height_female:new FormControl(""),
  stride_length:new FormControl(""),
  move_per_mile:new FormControl(""),
  active_minute:new FormControl(""),
  temperament:new FormControl(""),
  target:new FormControl(""),
  manual_activity:new FormControl(""),
   image_path:new FormControl(""),
});


  constructor(private apiSerivce: MyDataService,) {
    this._Array =new addbreed()
    this.userForm.value
  }
  ngOnInit(): void {
    this.apiSerivce.listbreedcategory({'breed_category_id':''}).subscribe( 
    resultArray => this.breedcategory = resultArray,)
    this.breedcategory;
    this.userForm = new FormGroup({
    breed_name : new FormControl("",Validators.required),
    breed_category_id: new FormControl(this.breed_id,Validators.required),
    origin:new FormControl("",Validators.required),
    life_span:new FormControl("",Validators.required),
    weight_male:new FormControl("",Validators.required),
    weight_female:new FormControl("",Validators.required),
    height_male:new FormControl("",Validators.required),
    height_female:new FormControl("",Validators.required),
    stride_length:new FormControl("",Validators.required),
    move_per_mile:new FormControl("",Validators.required),
    active_minute:new FormControl("",Validators.required),
    temperament:new FormControl("",Validators.required),
    target:new FormControl("",Validators.required),
    manual_activity:new FormControl("",Validators.required),
    image_path:new FormControl("",Validators.required),
    });
    
  }
   onSubmit(userForm)
  { 
        if(this.userForm.value.breed_name == undefined || this.userForm.value.image_path == undefined || this.userForm.value.image_path == '' || this.userForm.value.manual_activity == undefined ||  this.userForm.value.manual_activity == '' ||  this.userForm.value.target == undefined || this.userForm.value.target == '' ||  this.userForm.value.temperament == undefined  ||  this.userForm.value.temperament == '' ||  this.userForm.value.active_minute == undefined || this.userForm.value.active_minute == '' || this.userForm.value.move_per_mile == undefined || this.userForm.value.move_per_mile == '' || this.userForm.value.stride_length == undefined ||  this.userForm.value.stride_length == '' || this.userForm.value.height_female == undefined || this.userForm.value.height_female == '' || this.userForm.value.height_male == undefined ||  this.userForm.value.height_male == '' || this.userForm.value.weight_male == undefined  || this.userForm.value.weight_female == undefined ||  this.userForm.value.weight_female == '' || this.userForm.value.weight_male == '' || this.userForm.value.life_span == undefined || this.userForm.value.life_span == '' ||  this.userForm.value.breed_category_id == undefined || this.userForm.value.origin == undefined || this.userForm.value.breed_name == '' || this.userForm.value.breed_category_id == '' || this.userForm.value.origin == '')
        {
          this.isValidFormSubmitted = false;
          this.imageLoader= false;
          this.hidePopup()
        }
        else
        {
          this.userForm.value.image_path = this.image;
          this.imageLoader= true;
           
          /* For Add Breeds Services  */ 
          this.apiSerivce.addbreed(this.userForm.value).subscribe( 
          resultArray =>{this._Array= resultArray,
          this._Array.error,this._Array.message,this.imageLoader= false})
          const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
          this.display2="block";
          this.userForm.value;
          this.isValidFormSubmitted = false;
          if (this.userForm.invalid){
            return;
          }
          this.isValidFormSubmitted = true;
          this._Array= this.userForm.value;
          this.apiSerivce.addbreed(this._Array);
          this.userForm.reset();
      }  
  }
      get breed_name(){
        return this.userForm.get('breed_name');
      }
      get breed_category_id(){
        return this.userForm.get('breed_category_id');
      }
      get origin(){
        return this.userForm.get('origin');
      }
      get life_span(){
        return this.userForm.get('life_span');
      }
      get weight_male(){
        return this.userForm.get('weight_male');
      }
      get weight_female(){
        return this.userForm.get('weight_female');
      }
      get height_male(){
        return this.userForm.get('height_male');
      }
      get height_female(){
        return this.userForm.get('height_female');
      }
      get stride_length(){
        return this.userForm.get('stride_length');
      }
      get move_per_mile(){
        return this.userForm.get('move_per_mile');
      }
      get active_minute(){
        return this.userForm.get('active_minute');
      }
      get temperament(){
        return this.userForm.get('temperament');
      }
      get target(){
        return this.userForm.get('target');
      }
      get manual_activity(){
        return this.userForm.get('manual_activity');
      }
      get image_path(){
        return this.userForm.get('image_path');
      }
      
      changeListener($event) : void{
          this.readThis($event.target);
      }
      readThis(inputValue: any): void{
        var file:File = inputValue.files[0];
        console.log(file);
        var myReader:FileReader = new FileReader();
        console.log(myReader);
        myReader.onloadend = (e) => {
        var file= this.userForm.value.image_path;
        console.log(file)
        var reg = this.userForm.value.image_path.replace(/^.*\./, '');
        console.log(reg)
        if(reg=="jpg" || reg=="png" ||  reg=="jpeg"){
           this.image = myReader.result;
          }
        else{
           this.display3="block";
           this.userForm.controls['image_path'].patchValue('');
           this.image='';
          }
       }
        myReader.readAsDataURL(file);
        console.log(myReader)
  }
  hidePopup(){ 
      this.display2="none";
      this.imageLoader= false; 
  }
  hidePopup1(){
    this.display3="none";
   }
}


 

