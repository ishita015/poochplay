import { Component, OnInit } from '@angular/core';
import { MyDataService } from './../../my-data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { listfoodcompany } from './../../models/listfoodcompany';
import 'rxjs/add/operator/map'
import { FormGroupName } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { deletelistfoodcompany} from './../../models/deletelistfoodcompany';
import {ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { ListFoodCompanyFilter } from 'app/foods/list-food-company/filter.pipe';

@Component({
  templateUrl: './list-food-company.component.html',
  
})
export class ListFoodCompanyComponent{
  foodcompany: any = {}
  breedcategory: any = {}
  deletefoodcompany: any = {}
  characters: Observable<any>
  public filterArg:listfoodcompany;
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
    deleted:deletelistfoodcompany;
    public _Array7: listfoodcompany;
    
     constructor(private apiSerivce: MyDataService) {
      this.filterArg = new listfoodcompany();
        this.foodcompany = new listfoodcompany()
      }
  ngOnInit(): void {
       this.getFoodCompany();
   }
   public deletelistfoodcompany(id){
    this.Id = id
    this.display="block";
     
  }
  onCloseHandled(id){
    
    this.display="none";
    this.display3="block";
       /* For Delete Food Company Services  */  
    this.apiSerivce.deletelistfoodcompany({"company_id":id}).subscribe( resultArray =>{ this.deletefoodcompany = resultArray,
    this.deletefoodcompany.message,this.deletefoodcompany.error})
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
      /* For List Food Company Services  */  
    this.apiSerivce.listfoodcompany({'offset':this.offset,'limit':this.limit}).subscribe( resultArray => {this.foodcompany = resultArray, 
    console.log("resultArray",resultArray);
      
    this.imageLoader= false,
    this.setPage(this.foodcompany.total_rows,this.offset, this.limit);
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
           
            console.log(lastpage);
            this.dotPage = true;
            //this.pagination = this.pagination.splice((currentpage-1),3);
            this.pagination = [1, '. .' ,currentpage, currentpage+1, currentpage+2, '. .', lastpage]
            console.log(currentpage);
        }
      }
    }
  
  hidePopup()
  {  
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
  
    this.apiSerivce.listfoodcompany({'offset':this.offset,'limit':this.limit,'search_key':search.searchData}).subscribe( resultArray =>{
      (this.foodcompany = resultArray);
       this.userData = this.foodcompany.response;
         console.log(this.userData);
      // this.imageLoader = false;
      })
          // this._Array7
     }
  
}
   