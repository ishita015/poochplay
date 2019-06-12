import { Component, OnInit  } from '@angular/core';
import { MyDataService } from '../../my-data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import 'rxjs/add/operator/map';
import { termcondition} from '../../models/termcondition';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import { updatepage } from 'app/models/updatepage';
@Component({
 
  selector: 'app-terms-and-condition',
  templateUrl: './terms-and-condition.component.html',
  styleUrls: ['./terms-and-condition.component.css']
})
export class TermsAndConditionComponent implements OnInit {

  constructor(private myservice: MyDataService, private router: Router, route: ActivatedRoute) { }
  public term_condition: termcondition;

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
  ngOnInit() {
    this.myservice.termcondition({}).subscribe(
      resultArray => {
        this.term_condition = resultArray;
        console.log(this.term_condition)
        this.pageresponse = this.term_condition.response;
        console.log(this.pageresponse)
      });
  }
  edit(editForm){
    alert(2)
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
      // this.imageLoader= false;    
    }
}