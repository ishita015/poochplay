import { Component, OnInit ,Inject } from '@angular/core';
import { MyDataService } from './../../my-data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { Http,Headers,Response, RequestOptions } from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';    
import { addbreedcategory } from './../../models/addbreedcategory';
import {DialogModule} from 'primeng/dialog';

@Component({
  templateUrl: './add-breed-category.component.html',
})
export class AddBreedCategoryComponent{

    isValidFormSubmitted = null;
    display2='none'
    isChecked = false;
    public addb: addbreedcategory;
    addbreedcategory:any = {};
    public imageLoader:boolean= false;
    
    userForm = new FormGroup({
        name : new FormControl(""),
        status: new FormControl(""),
    });
    constructor(private apiSerivce: MyDataService){
        this.addb =new addbreedcategory()
        this.userForm.value
    }
    ngOnInit(): void{
        this.userForm = new FormGroup({
            name : new FormControl("",Validators.required),
            status: new FormControl("",Validators.required),
        });
      }
    onSubmit(userForm){
        if(this.userForm.value.name == undefined || this.userForm.value.name == ''){
            this.isValidFormSubmitted = false
            this.imageLoader= false;
            this.hidePopup()
        }
        else{
            if(this.userForm.value.status==true){
                this.userForm.value.status = 101;
            }
            else if(this.userForm.value.status==false || this.userForm.value.status ==
             undefined){
                this.userForm.value.status = 100;
            }
            this.imageLoader= true;

             /* For Add Breeds Category Services  */
            this.apiSerivce.addbreedcategory(this.userForm.value).subscribe( 
            resultArray =>{ this.addb = resultArray,this.addb.error,this.addb.message,this.imageLoader= false});
            this.display2="block";
            const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
            this.isValidFormSubmitted = false;
            if (this.userForm.invalid){
                return;
            }
            this.isValidFormSubmitted = true;
            this.addb= this.userForm.value;
            this.apiSerivce.addbreedcategory(this.addb);
            this.userForm.reset();
    }
}
    get name(){
        return this.userForm.get('name');
    }
    get status(){
        return this.userForm.get('status');
    }
    hidePopup(){ 
      this.display2="none";
      this.imageLoader= false;
    }
  }
 

