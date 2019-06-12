
import { Component, OnInit } from '@angular/core';
import { MyDataService } from './../../my-data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { userlist } from './../../models/userlist';
import 'rxjs/add/operator/map'
import { UserListFilter } from './filter.pipe';
@Component({
  templateUrl: 'user-list.component.html',
  //styleUrls: ['./add-storie.component.css']
})
export class UserListComponent {
    userlist: any = {}
    public _Array7: userlist;
    public filterArg:userlist;
    public count : number;
    public current_page : number = 1;
    public isHide = 'false';
    public isShow = 'false';
    public isHidePag=false
    public offset :number = 0;
    public limit :number = 10;
    public pagination:any = [1];
    error;
    dotPage = false;
    public imageLoader:boolean= true;
    userData;
     
    constructor(private apiSerivce: MyDataService) {
      this.filterArg =new userlist();
      const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
       /* For User List Services  */  
      this.apiSerivce.userlist({'offset':'0','limit':'10'}).subscribe( resultArray =>{
        this.userlist = resultArray,
          this.imageLoader = false;})
            this._Array7
       }
     
       setOffset(page){
            this.current_page = page;
            this.offset = page*this.limit - this.limit;
            this.getFoodCompany();
          }
        getFoodCompany(){

        
            const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
            this.apiSerivce.userlist({'offset':this.offset,'limit':this.limit}).subscribe(
              resultArray => {this.userlist = resultArray,
               this.setPage(this.userlist.total_rows, this.offset, this.limit)
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
                    this.pagination = [1, '. .' ,currentpage, currentpage+1, currentpage+2, '. .', lastpage]
                    console.log(currentpage);
                }
              }
            }
          
   
   
   ngOnInit(): void {
      this.getFoodCompany()
    }
  
    search(search){
      // alert(1);
      console.log(search.searchData)
      this.isShow = 'true';
      this.isHide='true';

      this.apiSerivce.userlist({'offset':'0','limit':'10','search_key':search.searchData}).subscribe( resultArray =>{
        this.userlist = resultArray;this.userData = this.userlist.response;
          if(this.userlist.error==true)
          {
            this.isHidePag=true;
          }
        
        ;
        
        console.log(this.userData);
        // this.imageLoader = false;
        })
            // this._Array7
       }
    

}
