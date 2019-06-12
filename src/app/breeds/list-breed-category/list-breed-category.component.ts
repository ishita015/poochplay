import { Component, OnInit } from '@angular/core';
import { MyDataService } from './../../my-data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { listbreedcategory } from './../../models/listbreedcategory';
import 'rxjs/add/operator/map'
import { FormGroupName } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { deletetag } from './../../models/deletetag';
import { ListBreedCatFilter } from './filter.pipe';
@Component
({
  templateUrl: './list-breed-category.component.html',

})
export class ListBreedCategoryComponent{
    public _Array7: listbreedcategory;
    breeds: any = []
    display='none'
    display2='none'
    Id: any;
    public page:any;
    searchableList: any = {}
    public breedcategory: any = {}
    deleted:deletetag;
    public imageLoader:boolean= false;
    public filterArg:listbreedcategory;
    constructor(private apiSerivce: MyDataService) 
    {
      this.breedcategory = new listbreedcategory()
      this.filterArg =new listbreedcategory();
      const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
      this.imageLoader= true;
       
      /* For List Breeds Services  */ 
      this.apiSerivce.listbreedcategory({'breed_category_id':''}).subscribe( resultArray =>{ 
      this.breeds = resultArray,this.imageLoader = false })
      this.searchableList = ['breed_category_id','breed_name',] 
    }
    ngOnInit(){
      
    }
    public deletetag(id){ 
      this.Id = id
      
      this.display="block";
      
    }
    onCloseHandled(id){
      
      this.display="none";
      this.display2="block";

      /* For Delete Breeds Services  */ 
      this.apiSerivce.deletetag1({"breed_category_id":id}).subscribe( resultArray =>{
      this.breedcategory = resultArray,this.breedcategory.error,this.breedcategory.message})
      this.display='none'; 
    }
      hidePopup(){  
      this.display="none";
      this.display2="none";
      // location.reload()
      }
      hidePopup1(){
        location.reload();
      }
      onSubmit(){
        
      }
}
   