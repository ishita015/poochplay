import { Component, OnInit } from '@angular/core';
import { MyDataService } from './../../my-data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { listfoodproduct } from './../../models/listfoodproduct';
import 'rxjs/add/operator/map'
import { FormGroupName } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import {ActivatedRoute} from '@angular/router';
import { deletelistfoodproduct } from './../../models/deletelistfoodproduct';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { ListFoodProductFilter } from 'app/foods/list-food-product/filter.pipe';
@Component({
  templateUrl: './list-food-product.component.html',
})
export class ListFoodProductComponent{
  foodproduct: any = {}
  deleted:deletelistfoodproduct;
    public _Array7: listfoodproduct;
    deletefoodproduct: any = {}
    characters: Observable<any>
    public filterArg:listfoodproduct;
    public count : number;
    public current_page : number = 1;
    public offset :number = 0;
    public limit :number = 10;
    public pagination:any = [1];
    display='none';
    display2='none';
    display3='none';
    Id: any;
    dotPage = false;
 
    public isHide = 'false';
    public isShow = 'false';
    userData;

    public imageLoader:boolean= false;
     constructor(private apiSerivce: MyDataService) {
       this.filterArg = new listfoodproduct();
       this.foodproduct = new listfoodproduct()
  
     }
  ngOnInit(): void {
       this.getFoodCompany();
  }
   public deletelistfoodproduct(id){
      this.display="block";
      this.Id = id
}
  onCloseHandled(id){
 
      this.display="none";
      this.display3="block";
      const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
       /* For Delete Food Product Services  */  
      this.apiSerivce.deletelistfoodproduct({"product_id":id}).subscribe( resultArray =>{ 
      this.deletefoodproduct = resultArray,this.deletefoodproduct.message,
      this.deletefoodproduct.error})
      this.display='none'; 
    }
   
   setOffset(page){
    this.current_page = page;
    this.offset = page*this.limit - this.limit;
    this.getFoodCompany();
  }
  getFoodCompany(){
    this.offset;
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    this.imageLoader= true;
    /* For List Food Product Services  */  
    this.apiSerivce.listfoodproduct({'offset':this.offset,'limit':this.limit}).subscribe( 
    resultArray => {this.foodproduct = resultArray, this.imageLoader= false
    this.setPage(this.foodproduct.total_rows,this.offset, this.limit);
    
   })
 }
 setPage(page: number,currentpage: number,limit:number){
  console.log(currentpage)
  if(limit!=0){

  currentpage = currentpage/limit
  }
   this.count = page;
   this.pagination = [1];
   for(var i=1; i<=this.count; i++){
      if(i%this.limit == 0){
        this.pagination.push((i/this.limit)+1)
      }
   }
   this.pagination;
   if(this.pagination.length > 5){
    let lastpage = this.pagination[this.pagination.length-1];
    if(currentpage < 4){
      this.dotPage = false;
      this.pagination = this.pagination.splice(0,5);
    }
    else if(currentpage > (lastpage-4)){
      this.pagination = this.pagination.splice(lastpage-5, 5);
      this.dotPage = false;
    }
    else{
        this.dotPage = true;
        //this.pagination = this.pagination.splice((currentpage-1),3);
        this.pagination = [1, '. .' ,currentpage, currentpage+1, currentpage+2, '. .', lastpage]
       
    }
  }
}
  hidePopup(){  
    this.display="none";
    this.display3="none";
    // location.reload()
    }
    hidePopup1(){
      location.reload();
    }
    search(search){
      alert(1);
      console.log(search.searchData)
      this.isShow = 'true';
      this.isHide='true';
    
      this.apiSerivce.listfoodproduct({'offset':this.offset,'limit':this.limit,'search_key':search.searchData}).subscribe( resultArray =>{
        (this.foodproduct = resultArray);
         this.userData = this.foodproduct.response;
           console.log(this.userData);
        // this.imageLoader = false;
        })
            // this._Array7
       }
   
  }
   