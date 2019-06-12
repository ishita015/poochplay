import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../../my-data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import 'rxjs/add/operator/map';
import { aboutus } from '../../models/aboutus';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import { updatepage } from 'app/models/updatepage';

@Component({
 
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit{
  public about_us: aboutus;
  public update_page: updatepage;
  public pageresponse:any;
  public id:string;
  display2='none'
  data;
  public isHide = false;
  public isShow = false;
  page_value;
  userForm = new FormGroup({
    page_value: new FormControl(''),
    id: new FormControl(''),
   });
   editForm = new FormGroup({
    page_value: new FormControl(''),
    id: new FormControl(''),
   });

  constructor(private myservice: MyDataService, private router: Router, route: ActivatedRoute) {
    // this.id = route.snapshot.params['id'];
    // console.log(this.id );
    
   }
  ngOnInit() {
    console.log(this.id );
    // this.content_id = route.snapshot.params['content_id'];
    // console.log(this.content_id );
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    this.myservice.aboutus({}).subscribe(
      resultArray => {
        this.about_us = resultArray;
        // console.log(this.about_us)
        this.pageresponse = this.about_us.response;
        console.log(this.pageresponse)
      });
   
  }
 
  edit(editForm){
    // alert(2)
    console.log(editForm)
    this.isShow = true;
    this.isHide=true;

  }
  onSubmit(userForm)
  {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    this.myservice.updatepage({'id': userForm.id,'page_value':userForm.page_value}).subscribe(
      resultArray => {
        this.update_page = resultArray;
        this.update_page.message;
        this.display2="block";
         console.log(this.update_page.message)
    });
  }
  hidePopup()
    { 
      this.display2="none";
      location.reload();    
    }
}
