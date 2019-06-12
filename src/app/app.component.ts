import { Component } from '@angular/core';
 import { MyDataService } from './my-data.service';
 import { NavigationEnd }   from '@angular/router';
//  import { AppComponent } from './app.component';
import 'rxjs/add/operator/filter'; 
import { CookieService } from 'ngx-cookie-service';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';
import { checkuserlogin } from './models/checkuserlogin';
// import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
//  import { Location } from '@angular/common';
@Component({
  // tslint:disable-next-line
  selector: 'body',

  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  //  router: string;
  public result: any;
  user_type:any;
  public _Array: checkuserlogin;
  cookieValue = 'default';
  public dataArray:any=[];
  public dataObject:any={};
  showDialog = false;
  userForm;
  message;
  public id: any ={};
  response:string;
  status;
  
  
  // cookieValue: object;
  constructor( public router: Router,private cookieService: CookieService,private apiSerivce: MyDataService){
    router.events.forEach((event: NavigationEvent) => {
     
      if(event instanceof NavigationStart) {

       this.cookieValue = this.cookieService.get('appCookie');

       this.cookieValue;
       if(this.cookieValue == "" || this.cookieValue == undefined)
       {
         
         if(event.url == "/login"){
         
        }
        else{
        this.router.navigate(['/login'])
        }
        
       }
       else{
       
        this.cookieValue=JSON.parse( this.cookieValue)
        this.logginIn()
       }
    }
  });
     
   }
   logginIn(){
    
    this.cookieValue = this.cookieService.get('appCookie');
    console.log(this.cookieValue)
    if(this.cookieValue != '' && this.cookieValue != undefined){
      this.cookieValue = JSON.parse(this.cookieService.get('appCookie'));
     console.log(this.cookieValue)
    this.dataArray=this.cookieValue;
    this.dataObject =  this.dataArray
    this.id=this.dataArray.response.admin_id ;
    console.log(this.dataObject.response.authentication.value)
       
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
     this.apiSerivce.checkuserlogin({"user_id":this.id,"user_type":'4',"key":this.dataObject.response.authentication.value}).subscribe( 
       resultArray =>{this._Array = resultArray;
         console.log(resultArray)
         if(resultArray.status == true ){
         
     }
     else{
           
            this.logout();
     }
 
       
       }
     );
    }
    else
    {
    }
  }
  logout() {
    
    this.cookieService.delete('appCookie');
    console.log(this.cookieService.get('appCookie'));
    this.router.navigate(['login']);
  }
    
 
  ngOnInit() {
    this.logginIn()
    }
  }