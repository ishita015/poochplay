import { Component, OnInit } from '@angular/core';
import { MyDataService } from './../../my-data.service';
import { FormControl, FormGroup, Validators, NgForm} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Http,Headers,Response, RequestOptions } from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { listlifestyle } from './../../models/listlifestyle';
import { updatelifestyle } from './../../models/updatelifestyle';
import {ActivatedRoute} from '@angular/router';

@Component({
  templateUrl: './update-life-style.component.html',
})
export class UpdateLifeStyleComponent
{
  
  public addlifestyle: object = {}
  public updatelifestyle:any;
  isValidFormSubmitted = null;
  public lifestyle_id:string;
  public ul:any;
  public _Array7: listlifestyle;
  public _Array3:  updatelifestyle ;
  public breedcategory: any = {}
  display2='none'
  public imageLoader:boolean= false;
 
  userForm = new FormGroup({
      lifestyle_id: new FormControl(""),
      name: new FormControl(""),
      status:new FormControl(""),
   });
  constructor(private apiSerivce: MyDataService, route: ActivatedRoute){
    this._Array3 = new updatelifestyle()
      this.lifestyle_id= route.snapshot.params['lifestyle_id'];
      this.editlifestyle();
  }
  ngOnInit(): void 
  {
       /* For List Life Style Services  */ 
      this.apiSerivce.listlifestyle({'lifestyle_id':''}).subscribe( 
      resultArray => this.breedcategory = resultArray, )
      this.breedcategory;
      this.userForm = new FormGroup({
          name : new FormControl("",Validators.required),
          lifestyle_id: new FormControl(this.lifestyle_id,Validators.required),
          status:new FormControl("",Validators.required),
      });
   }
    public updatelifestyl(userForm: NgForm){
      this.ul.updatelifestyle(userForm.value);
    }
    public editlifestyle(){
    this.imageLoader = true;
     /* For Detail Life Style Services  */ 
    this.apiSerivce.editlifestyle({'lifestyle_id': this.lifestyle_id}).subscribe( 
    resultArray =>{resultArray
    this.imageLoader = false;
    if(resultArray.list.status== "101" || resultArray.list.status== "1" ){
      resultArray.list.status = true
     }  
      else{
      resultArray.list.status = false
     }
    this.updatelifestyle = resultArray.list
    this.userForm = new FormGroup({
        name : new FormControl(this.updatelifestyle.name,Validators.required),
        lifestyle_id: new FormControl(this.updatelifestyle.lifestyle_id,Validators.required),
        status:new FormControl(this.updatelifestyle.status),
     });
  })
}
onSubmit(userForm)
{
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
 
    this.imageLoader= true;
     /* For Update Life Style Services  */ 
    this.apiSerivce.updatelifestyle(this.userForm.value).subscribe( resultArray => { 
    this._Array3 = resultArray, data => { alert("Success Adding"),this._Array3.error,
    this._Array3.message};
    this.imageLoader= false;
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    this.userForm.value.lifestyle_id = this.lifestyle_id;
    this.display2="block";
     
    error =>
    {
      alert("Error Adding");
      console.log(error);
    }
  })
    this.isValidFormSubmitted = false;
    if (this.userForm.invalid) 
    {
        return;
    }
    this.isValidFormSubmitted = true;
    this._Array3= this.userForm.value;
    this.apiSerivce.updatelifestyle(this._Array3);
    this.userForm.reset();
  }
}
    get name() 
    {
      return this.userForm.get('name');
    }
    get lifestyleid() 
    {
      return this.userForm.get('lifestyle_id');
    }
    get status() 
    {
      return this.userForm.get('status');
    }
    hidePopup()
    { 
      this.display2="none";
      this.imageLoader= false;    
    }
 }





   
   