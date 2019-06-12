import { Component, OnInit } from '@angular/core';
import { MyDataService } from './../../my-data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { listlifestyle } from './../../models/listlifestyle';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map'
import { FormGroupName } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { deletebodycondition } from './../../models/deletebodycondition';

import { ListLifeStyleFilter } from 'app/lifestyle/list-life-style/filter.pipe';
@Component({
  templateUrl: './list-life-style.component.html',
  })
export class ListLifeStyleComponent{
    public _Array7: listlifestyle;
    lifestyles: any = {}
    searchableList: any = {}
    public count : number;
    public current_page : number = 1;
    public offset :number = 0;
    public limit :number = 3;
    public pagination:any = [1];
    public filterArg:listlifestyle;
    display='none'
    display2='none'
    Id: any;
    public page:any; 

    breedcategory: any = {}
    public imageLoader:boolean= false;
    
    constructor(private apiSerivce: MyDataService, private route:Router){
      
      this.filterArg =new listlifestyle();
      this.breedcategory = new listlifestyle()
      const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
      this.imageLoader= true;
      /* For List Life Style Services  */ 
      this.apiSerivce.listlifestyle({"lifestyle_id":''}).subscribe( resultArray =>{ 
      this.lifestyles = resultArray,this.imageLoader= false})
      this._Array7
      this.searchableList = ['lifestyle_id ','name'] 
    }
    public deletelifestyle(id){
      this.Id = id
      this.display="block"; 
    }
    onCloseHandled(id){

      this.display="none";
      this.display2="block";
       /* For Delete Life Style Services  */ 
      this.apiSerivce.deletelifestyle({"lifestyle_id":id}).subscribe( 
      resultArray =>{ this.breedcategory = resultArray,this.breedcategory.error,
      this.breedcategory.message})

      this.display='none'; 
      
      }
    
    hidePopup()
    {  this.display="none";
    this.display2="none";
    // location.reload()
    }
    hidePopup1(){
      this.route.navigate(['/lifestyle/list-life-style1'])
    }
   
    onSubmit(){
      
    }
    
  }
   