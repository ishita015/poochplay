import { Component, OnInit } from '@angular/core';
import { MyDataService } from './../../my-data.service';
import { FormControl, FormGroup, Validators ,NgForm } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { Http,Headers,Response, RequestOptions } from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { addbreed } from './../../models/addbreed';
import {ActivatedRoute} from '@angular/router';
import { updatebreedcategory } from './../../models/updatebreedcategory';

@Component({
  templateUrl: './update-breed-category.component.html',
 
})
export class UpdateBreedCategoryComponent {
  
    isValidFormSubmitted = null;
    public updatebreed:any;
    // public updatebreedcategory:any;
    public addbreedcategory: object = {}
    public message: string;
    display2='none';
    breed_category_id:string;
    breeds: any = {}
    public imageLoader:boolean= true;
    userForm: FormGroup;
    public uc:any;
    breed_name;
    public updateData;

    public updatebreedcategory: updatebreedcategory;
    
    constructor(private apiSerivce: MyDataService, route: ActivatedRoute){
       /* Implement Param Id  */
       this.breed_category_id = route.snapshot.params['breed_category_id']; 
       this.editbreedcategory();
     }
     
     public updatebreeds(userForm: NgForm){
       this.uc.updatebreedcategory(userForm);
    }
     public editbreedcategory(){
        this.imageLoader = true
         /* For Detail Breed Category Services  */  
        this.apiSerivce.editbreedcategory({'breed_category_id': this.breed_category_id}).subscribe( 
        resultArray =>{resultArray
        this.imageLoader = false;
        this.updatebreedcategory = resultArray.list
        console.log( this.updatebreedcategory.breed_name)
        if(resultArray.list.status== "101" || resultArray.list.status== "1" ){
            resultArray.list.status = true
        }
        else{
            resultArray.list.status = false
      }
    console.log(resultArray);
    // this.userForm = new FormGroup({
    //     name : new FormControl(this.updatebreedcategory.breed_name,Validators.required),
    //     status: new FormControl(this.updatebreedcategory.status),
    //     breed_category_id:new FormControl(this.updatebreedcategory.breed_category_id,Validators.required),
    // });
   })
  }
ngOnInit(): void {
  // this.userForm = new FormGroup({
  //     name : new FormControl("",Validators.required),
  //       status : new FormControl("",Validators.required),
  //       breed_category_id :  new FormControl("",Validators.required),
  //     });
}
  
onSubmit(userForm)
  {
    if(userForm.breed_name == undefined || userForm.breed_name == ''){
        this.isValidFormSubmitted = false;
        this.imageLoader= false;
        this.hidePopup()
   }
   else{
    if(userForm.status==true){
        userForm.status = 101;
    }
    else if(userForm.status==false){
        userForm.status = 100;
    }
        this.imageLoader=true;
        userForm.name=userForm.breed_name
        delete userForm.breed_name;
          /* For Update Breed Category Services  */  
        this.apiSerivce.updatebreedcategory(userForm).subscribe( resultArray => {
        this.addbreedcategory = resultArray;
       this.imageLoader=false;
       console.log(this.addbreedcategory)
       this.updateData=this.addbreedcategory;
        this.message=this.updateData.message;
       this.display2="block";
      userForm.breed_category_id = this.breed_category_id;
      //  this.userForm.value
       this.isValidFormSubmitted = false;
       if (userForm){
        return;
       }
      // this.isValidFormSubmitted = true;
      // this._Array= this.updatebreedcategory;
      // this.apiSerivce.updatebreedcategory(this._Array);
      // this.userForm.reset();
      // this.userForm.value,
      error => {
      alert("Error Adding");
      error;
    }
  });
 }
}
  // get name() {
  //   return this.userForm.get('name');
  // }
  // get status() {
  //   return this.userForm.get('status');
  // }
  // get breedcategoryid() {
  //   return this.userForm.get('breed_category_id');
  // }
  hidePopup(){ 
   this.display2="none";
   this.imageLoader= false;  
  }
}
   

    
   
   