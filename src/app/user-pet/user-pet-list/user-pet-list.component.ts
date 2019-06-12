
import { Component, OnInit } from '@angular/core';
    /* Declaration Services */
import { MyDataService } from './../../my-data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
   /* Declaration Model */
import { userpetlist } from './../../models/userpetlist';
  /* Declaration Filter */
import { UserPetListFilter } from './filter.pipe';
  /* Declaration Cookies Service */
import { CookieService } from 'ngx-cookie-service';
import 'rxjs/add/operator/map'
  /* Declaration Activated Route */
import {ActivatedRoute} from '@angular/router';
 
/* Declaration Path of HTML And CSS */
@Component({
  templateUrl: 'user-pet-list.component.html',
  styleUrls: ['./user-pet-list.component.css']
})
 /* Created Class */
export class UserPetListComponent {

    /* Created New Object */
    userpetlist: any = {}

    /* Interpolation Variable created to bind the value */
    public Array: userpetlist;

     /* Filter Variable created to bind the value */
    public filterArg:userpetlist;
    public page:any;
    /* Declaration Id */
    user_id:any;
    cookieValue = 'default';

    /* Created New Object */
    public id: any ={};

    /* Created New Array */
    public dataArray:any=[];
    public dataObject:any={};

    /* Declaration ImageLoader in boolean Value */
    public imageLoader:boolean= true;
    public petlist:any;
    public message;
   
    /* Created Constructor  */
    constructor(private apiSerivce: MyDataService,private cookieService: CookieService,route: ActivatedRoute) {
      
    /* Created New Object */
      this.filterArg =new userpetlist();
      const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
     
    /* Implement Param Id  */
       this.user_id = route.snapshot.params['user_id'];
       console.log(this.user_id)
    
    /* For User Pet List Services  */  
    this.apiSerivce.userpetlist({'user_id': this.user_id}).subscribe( resultArray =>{
    console.log(resultArray)
    console.log(this.user_id)
    this.userpetlist = resultArray, this.userpetlist.message
    console.log(this.userpetlist)
    this.message=this.userpetlist.message;

    /* ImageLoader in boolean Value */
    this.imageLoader = false;
   })
  }
}
   
   
  

  

