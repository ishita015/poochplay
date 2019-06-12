import { Component, ViewChild ,OnInit , Inject, Injectable } from '@angular/core';
import { MyDataService } from './../../my-data.service';
import { Http, Response, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { viewbreed } from './../../models/viewbreed';

import { deletetag } from './../../models/deletetag';
import { Observable } from 'rxjs/Observable';
// import { ListBreedFilter } from 'app/components/breeds/view-breeds/filter.pipe';
import { ListBreedFilter } from './filter.pipe';
import { listbreed } from './../../models/listbreed';
@Component({
  templateUrl: './view-breeds.component.html',
  styles: ['./add-storie.component.css']
})
export class ViewBreedsComponent {
 
  display='none'
characters: Observable<any>
  breeds: any = {}
  display2='none'
  display3='none'
  public message: string;
  Id: any;
  deletebreeds:any = {}
  public count : number;
    public current_page : number = 1;
    public offset :number = 0;
    public limit :number = 10;
    public pagination:any = [1];
    public imageLoader:boolean= true;

    public isHide = 'false';
    public isShow = 'false';
    userData;
    
    deleted:deletetag;
    public filterArg:listbreed;
    _postsArray: viewbreed;
    dotPage = false;
    constructor(private newService: MyDataService){
     this.filterArg =new listbreed();
     const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
     /* For Viewbreed List Services  */  
     this.newService.viewbreed({'offset':'0','limit':'10'}).subscribe( 
     resultArray =>this.breeds = resultArray,)
     this.breeds =new viewbreed()
     this.imageLoader= false;
  }
  ngOnInit(): void {
    this.getFoodCompany();
  }
  public deletetag(id){
    this.Id = id
    this.display="block";
 }
setOffset(page){
  this.current_page = page;
  this.offset = page*this.limit - this.limit;
  this.getFoodCompany();
}
getFoodCompany(){
  const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
  this.imageLoader= true;
    /* For Viewbreed List Services  */  
  this.newService.viewbreed({'offset':this.offset,'limit':this.limit}).subscribe(
    resultArray => {this.breeds = resultArray, this.imageLoader= false,
    this.setPage(this.breeds.total_rows, this.offset, this.limit);
  })
}
   
setPage(page: number,currentpage: number,limit:number){
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
/*-------------------OK-------------------*/

onCloseHandled(id){
this.display='none'; 
this.display="none";
this.display3="block";
  /* For Viewbreed Delete Services  */  
this.newService.deletetag({"breed_id":id}).subscribe( resultArray => {
this.deletebreeds = resultArray,this.deletebreeds.error,this.deletebreeds.message})
this.display='none'; 
//  location.reload();
}
/*-------------------Close-------------------*/
hidePopup()
{  this.display="none";
   this.display3="none";
  //  location.reload()
}
hidePopup1(){
  location.reload()
}

search(search){
  alert(1);
  console.log(search.searchData)
  this.isShow = 'true';
  this.isHide='true';

  this.newService.viewbreed({'offset':this.offset,'limit':this.limit,'search_key':search.searchData}).subscribe( resultArray =>{
    (this.breeds = resultArray);
     this.userData = this.breeds.response;
       console.log(this.userData);
    // this.imageLoader = false;
    })
        // this._Array7
   }


}
 

