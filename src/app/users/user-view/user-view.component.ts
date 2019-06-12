
import { Component, OnInit } from '@angular/core';
import { MyDataService } from './../../my-data.service';
import { FormControl, FormGroup, Validators,NgForm } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Http,Headers,Response, RequestOptions } from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { userview } from './../../models/userview';
import {ActivatedRoute} from '@angular/router';

@Component({
  templateUrl: './user-view.component.html',
  })
export class UserViewComponent{
 
viewuser: any = {}
  user_id:string;
  public  image:String="";
  public foodcompany: any = {}
  public submited:any;
  
  breeds: any = {}
  public ub:any;
  public userview:userview;
  
  isValidFormSubmitted = null;
  public _Array3: userview;
  userForm = new FormGroup
 ({
    user_id: new FormControl(""),
    first_name: new FormControl(""),
    last_name: new FormControl(""),
    email: new FormControl(""),
    mobileno: new FormControl(""),
    city: new FormControl(""),
    state: new FormControl(""),
    postcode: new FormControl(""),
    country: new FormControl(""),
    notification: new FormControl(""),
    door:  new FormControl(""),
    profile_pic: new FormControl(""),
    
});
constructor(private apiSerivce: MyDataService, route: ActivatedRoute,public sanitizer: DomSanitizer) 
{
    this.user_id = route.snapshot.params['user_id'];
    // console.log(this.user_id);
    // this.edituserview;
   
  }
  public updatebreed(userForm: NgForm){
    this.ub.updatefoodcompany(userForm.value);
  }
  // public edituserview(){
   
  //   this.apiSerivce.edituserview({'user_id': this.user_id}).subscribe( resultArray =>{console.log(resultArray)
  //   this.userview = resultArray.response 
  //   console.log(this.userview);
   
  // })
  // }
  onSubmit()
  {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
     this.userForm.value.user_id = this.user_id;
      this.submited = true;
  }
  ngOnInit() 
  {
    this.apiSerivce.edituserview({'user_id': this.user_id}).subscribe( resultArray =>{console.log(resultArray)
      this.userview = resultArray.response
      console.log(this.userview);
   });
  }
}
