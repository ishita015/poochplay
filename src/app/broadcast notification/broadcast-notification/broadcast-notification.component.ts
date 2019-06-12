import { Component, OnInit  } from '@angular/core';
import { MyDataService } from '../../my-data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import 'rxjs/add/operator/map';
import { notification } from '../../models/notification';
import { Router } from '@angular/router';
import { UserListFilter } from './filter.pipe';
import { userlist } from './../../models/userlist';
@Component({
 
  selector: 'app-broadcast-notification',
  templateUrl: './broadcast-notification.component.html',
  styleUrls: ['./broadcast-notification.component.css']
})
export class BroadcastNotificationComponent implements OnInit{
                     //User table
  userlist: any = {};
  display2='none';

  public _Array7: userlist;
  public filterArg:userlist;
  public count : number;
  public current_page : number = 1;
  public isHide = 'false';
  public isShow = 'false';
   isValidFormSubmitted = null;

  public offset :number = 0;
  public limit :number = 10;
  public pagination:any = [1];
  dotPage = false;
  public imageLoader:boolean= true;
  userData;
  notification_allow = [];
  selectedAll: any;
               //Notification Form
  notification_form:any = {};
  public add_Notification:notification ;
  public notification_form_data: any = {};
  userForm = new FormGroup({
    title: new FormControl(''),
    message: new FormControl(''),
   });
  
   constructor(private myservice: MyDataService, private router: Router) { 
    this.filterArg =new userlist();
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    /* For User List Services  */  
   this.myservice.userlist({'offset':'0','limit':'10'}).subscribe( resultArray =>{
     this.userlist = resultArray,
       this.imageLoader = false;})
         this._Array7
}

ngOnInit(): void {
  this.getFoodCompany()
 
}


  setOffset(page){
    this.current_page = page;
    this.offset = page*this.limit - this.limit;
    this.getFoodCompany();
  }
getFoodCompany(){


    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    this.myservice.userlist({'offset':this.offset,'limit':this.limit}).subscribe(
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
    search(search){
      // alert(1);
      console.log(search.searchData)
      this.isShow = 'true';
      this.isHide='true';

      this.myservice.userlist({'offset':'0','limit':'10','search_key':search.searchData}).subscribe( resultArray =>{
        (this.userlist = resultArray);
        this.userData = this.userlist.response;


          console.log(this.userData);
        // this.imageLoader = false;
        })
            // this._Array7
       }



       checkSome(id) {
       
        if (id.selected === true) {
          this.notification_allow.push(id.user_id);
        }else {
          let i;
          for ( i = 0; this.notification_allow.length; i++) {
              if (this.notification_allow[i] === id.user_id) {
                  break ;
              }
          }
          this.notification_allow.splice(i, 1);
        }
        console.log(this.notification_allow);
      }

       selectAll() {
        for (let i = 0; i < this.userlist.response.length; i++) {
          this.userlist.response[i].selected = this.selectedAll;
          if (this.userlist.response[i].selected === true) {
            this.notification_allow.push(this.userlist.response[i].user_id);
          }else {
            let k;
            for ( k = 0; this.notification_allow.length; k++) {
                if (this.notification_allow[k] === this.userlist.response[i].user_id) {
                    break ;
                }
            }
            this.notification_allow.splice(k, 1);
          }
          console.log(this.notification_allow);
        }
      }
    
      checkIfAllSelected() {
        this.selectedAll = this.userlist.response.every(function(item: any) {
            return item.selected === true;
          });
      }
  


      onSubmit(userForm){
        
        // if (this.selectedAll === true) {
        //   this.userForm.value.isSelectAll = 101;
        // }else {
        //   this.userForm.value.isSelectAll = 100;
        // }
        
        this.userForm.value.user_id = this.notification_allow;
        this.userForm.value.user_type = 1;
        this.userForm.value.notification_data = {"title": this.userForm.value.title, "message": this.userForm.value.message};
        delete this.userForm.value.title;
        delete this.userForm.value.message;
        console.log(this.notification_form_data);
        const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        /* For User List Services  */  
       this.myservice.notification(this.userForm.value).subscribe( resultArray =>{
         this.add_Notification = resultArray,
        this.add_Notification.message,
        this.display2="block";
         console.log(this.add_Notification)
           this.imageLoader = false;})
          
      }
      hidePopup(){ 
      this.display2="none";
      location.reload();
       
    }
  
}
