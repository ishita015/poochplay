import { Component, OnInit } from '@angular/core';
import { MyDataService } from './../../my-data.service';
import { FormControl, FormGroup, Validators ,NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Http,Headers,Response, RequestOptions } from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { addpet } from './../../models/addpet';
import { listbodycondition } from './../../models/listbodycondition';
import {ActivatedRoute} from '@angular/router';
import { updatebodycondition } from 'app/models/updatebodycondition';

@Component({
  templateUrl: './update-body-condition.component.html',
  })
export class UpdateBodyConditionComponent
{
    
    public updatebodycondition:any;
    display2='none'
    public imageLoader:boolean= false;
    public addbodycondition: object = {}
    public uploadimages:any;
    public body_id:string;
    display3='none';
    public imageHide: boolean;
    breeds: any = {}
    public imagenew:String="";
    public _Array7: listbodycondition;
    public breedcategory: any = {}
    isValidFormSubmitted = null;
    public ub:any;
    public _Array3: updatebodycondition ;

    userForm = new FormGroup({
    body_id : new FormControl(""),
    name: new FormControl(""),
    body_score:new FormControl(""),
    image:new FormControl(""),
    status:new FormControl(""),
    

 });
constructor(private apiSerivce: MyDataService, route: ActivatedRoute) {
  this._Array3 = new updatebodycondition()
  /* Implement Param Id  */
  this.body_id = route.snapshot.params['body_id']; 
  console.log(this.body_id)
  this.editbodycondition();
}

ngOnInit(): void {

   /* For Body Condition List Services  */  
  this.apiSerivce.listbodycondition({'body_id':''}).subscribe( 
  resultArray => this.breedcategory = resultArray, )
  this.breedcategory;
  this.userForm = new FormGroup({
          name : new FormControl("",Validators.required),
          body_id: new FormControl(this.body_id,Validators.required),
          status:new FormControl("",Validators.required),
          body_score : new FormControl("",Validators.required),
          image : new FormControl("",Validators.required),
    });
}
//Update Function
public update(userForm: NgForm)
{
   this.ub.updatebodycondition(userForm.value);
}
//Edit Function
public editbodycondition(){
  
  this.imageLoader = true;

  /* For Body Condition Detail Services  */  
  this.apiSerivce.editbodycondition({'body_id': this.body_id}).subscribe( 
    resultArray =>{console.log(resultArray)
  this.imageLoader = false;
  if(resultArray.list.image == ''){
      resultArray.list.image = 
      'https://cdn.evbuc.com/eventlogos/91884425/imagenotavailablegrid.jpg';
  }
  else{
     
  }
  if(resultArray.list.status== "101" || resultArray.list.status== "1" ){
    resultArray.list.status = true
  }
  else{
    resultArray.list.status = false
  }
  this.updatebodycondition = resultArray.list
  this.updatebodycondition
  this.userForm = new FormGroup
  ({
      name : new FormControl(this.updatebodycondition.name,Validators.required),
      body_id: new FormControl(this.updatebodycondition.body_id),
      status:new FormControl(this.updatebodycondition.status),
      body_score:new FormControl(this.updatebodycondition.body_score,Validators.required),
      image:new FormControl(this.updatebodycondition.image),
      imagenew: new FormControl(""),
  });
})
}
//Add ImageLoader, Validation, DialogBox Onclick  Function
onSubmit(userForm){
  if(this.userForm.value.name == undefined || this.userForm.value.name == '' || 
  this.userForm.value.body_score == undefined || this.userForm.value.body_score == ''){
   
       this.isValidFormSubmitted = false;
        this.imageLoader= false;
        this.hidePopup()
 }
 else{
  this.userForm.value.imagenew = this.imagenew
  if(this.userForm.value.imagenew != undefined && this.userForm.value.imagenew != ''){
   console.log(this.userForm.value.image = this.userForm.value.imagenew)
  this.userForm.value.imagenew ='';
  }
  else{
    this.userForm.value.imagenew ='';
  }
  if(this.userForm.value.status==true){
         this.userForm.value.status = 101;
     }
     else if(this.userForm.value.status==false){
         this.userForm.value.status =100;
     }
  console.log(this.userForm.value);
  this.imageLoader= true;

  /* For User Pet Update Services  */  
  this.apiSerivce.updatebodycondition(this.userForm.value).subscribe( resultArray => { 
  this._Array3 = resultArray
  data => { alert("Success Adding"),this._Array3.error,this._Array3.message};
  this.imageLoader= false;
  const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
  this.display2="block";
  this.userForm.value.body_id = this.body_id;
  error =>
   {
    alert("Error Adding");
    error;
   }
})
    this.isValidFormSubmitted = false;
    if (this.userForm.invalid) 
    {
        return;
    }
    this.isValidFormSubmitted = true;
    this._Array3= this.userForm.value;
    this.apiSerivce.updatebodycondition(this._Array3);
    this.userForm.reset();
  }
}
// Fields Information Show 
get name() 
{
  return this.userForm.get('name');
}
get bodyid() 
{
  return this.userForm.get('body_id');
}
get status() 
{
  return this.userForm.get('status');
}
get body_score() 
{
  return this.userForm.get('body_score');
}
get images() 
{
  return this.userForm.get('imagenew');
}

 //File Upload Function

changeListener($event) : void 
{
    this.readThis($event.target);
    this.imageHide=true;
}
readThis(inputValue: any): void 
{

  var file:File = inputValue.files[0];
  var myReader:FileReader = new FileReader();
  myReader.onloadend = (e) => {
    console.log(this.userForm.value.image)
    var file= this.userForm.value.imagenew ;
    console.log(file)
    var reg = this.userForm.value.imagenew.replace(/^.*\./, '');
    console.log(reg)
    if(reg=="jpg" || reg=="png" ||  reg=="jpeg")
    {
     
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
// Ok Function
hidePopup()
   { 
      this.display2="none";
      this.imageLoader= false;  
  }
  hidePopup1(){
    this.display3="none";
   }
   
}




   

    
   
   