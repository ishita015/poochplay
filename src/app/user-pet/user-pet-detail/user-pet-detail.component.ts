import { Component, OnInit ,AfterViewInit} from '@angular/core';
import { MyDataService } from './../../my-data.service';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { userpetdetail } from './../../models/userpetdetail';
import { ActivatedRoute } from '@angular/router';

import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';

import { IMyDpOptions } from 'mydatepicker';
import { graphdetail } from '../../models/graphdetail';
import { userview } from '../../models/graphuserview';
import { synchistory } from '../../models/synchistory';
import * as Chart from 'chart.js'

import {temperamentlist} from './../../models/temperamentlist';

@Component({
  templateUrl: './user-pet-detail.component.html',
  styleUrls: ['./user-pet-detail.component.css'],

})
export class UserPetDetailComponent implements OnInit {

  dailypercent;
  intvalue;
  public page:any;
  view: any[] = [700, 400, 200];

  options = [{'id':'01','month':'January'},{'id':'02','month':'February'},{'id':'03','month':'March'}, {'id':'04','month':'April'} , {'id':'05','month':'May'}, {'id':'06','month':'June'}, {'id':'07','month':'July'},{'id':'08','month':'August'},{'id':'09','month':'September'},{'id':'10','month':'October'},{'id':'11','month':'November'},{'id':'12','month':'December'}];
  
  optionSelected: any;
  myForm:any;

  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd.mm.yyyy',
  };
  public myDatePicker: IMyDpOptions = {
    // other options...
    dateFormat: 'mm.yyyy',
  };
  public myDate: IMyDpOptions = {
    // other options...
    dateFormat: 'dd.mm.yyyy',
  };
  public my: IMyDpOptions = {
    // other options...
    dateFormat: 'dd.mm.yyyy',
  };
  userForms = new FormGroup({
    month_selected : new FormControl(""),
    year_selected: new FormControl(""),
  });

  /* Date Format Variable Include */
  public model: any;
  public model1: any;
  public model2: any;
  public model3: any;

  /*Created New Object */

  public monthly: any = {};
  public breeddetail: any;
  public productcompany:userpetdetail;
  public history:any = {};
  db: any = {}
  public viewuser: any = {}

  /*Declaration Id */
  user_id: string;
  pet_id: string;

  // ;year
  /*Created New Object */
  public activity_data: any = {}
  public dailyData: any = {}
  public active: any = {}
  public inactive: any ={}
  public Inactive: any = {}
  public petdetail: any = {}

  private image: String = "";
  public foodcompany: any = {}
  public submited: any;

  breeds: any = {}
  public ub: any;
  public userview: userview;
  public petData:any;
  public syncHis:any = [];
  petlist: any
  active_status;

  /* Temporary Variable */
  temp1 = [];
  temp2 = [];
  public form_date: any = {};

  /* Created New Object */
  date;
  date1;
  weekly_start;
  formatted;
  years;

  datearray: any = [];

  public temperamentObj:temperamentlist;
  public temp:any = {};
  /* Temporary Variable */
  temp_array: any = [];
  temp_array2: any = [];
  dashboardData: any;
  public imageLoader;
  /* Graph declaration  */
  public lineChartData: Array<any> = [

  ];

  canvas: any;
  ctx: any;
  revenueChart: any;
  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  public lineChartType: string = 'line';
  public lineChartColors = [
    { // grey
      backgroundColor: 'transparent',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },

  ]

  isValidFormSubmitted = null;
  public _Array3: userpetdetail;

  /*  User Pet Detail Fields  */
  userForm = new FormGroup({
    pet_id: new FormControl(""),
    owner_name: new FormControl(""),
    age: new FormControl(""),
    owner_email: new FormControl(""),
  });

  /* Created Constructor  */
  constructor(private apiSerivce: MyDataService, route: ActivatedRoute) {
    this.user_id = route.snapshot.params['user_id'];
    this.pet_id = route.snapshot.params['pet_id'];

  }

  /* For User Pet Detail Services  */
  ngOnInit(): void {

    this.date = new Date()
    this.date1 = new Date()
    this.weekly_start = new Date()
    console.log(this.date)
    this.apiSerivce.edituserpetdetail({ 'user_id': this.user_id, 'pet_id': this.pet_id })
      .subscribe(resultArray => {
        this.petData = resultArray.petdetail;
        this.test()
      });
    this.apiSerivce.synchistory({ 'user_id': this.user_id, 'pet_id': '3293' })
      .subscribe(resultArray => {
        this.syncHis = resultArray.history;
        console.log(this.syncHis );
      });
    
      this.temperamentlists();
  }
  onOptionSelected(event){
    console.log(event.id); //option value will be sent as event

   }
   public onChange(event): void {  // event will give you full breif of action
    const newVal = event.target.value;
    console.log(newVal);
  }

  public temperamentlists(){
    this.apiSerivce.temperamentlist({ }).subscribe(resultArray => {
      console.log(resultArray)
      this.temperamentObj = resultArray;
      console.log(this.temperamentObj);
     console.log( this.temperamentObj = resultArray);
      console.log( this.temp = this.temperamentObj.response);
      // console.log(this.temp = this.temperamentObj.name);
    })
  }


  test(){
    this.imageLoader = true;
    this.apiSerivce.graphdetail({
      'user_id': this.user_id, 'pet_id': this.pet_id, 'activity_date': this.date,'graph_status': '1'
    }).subscribe(resultArray => {
      this.userview = resultArray.dailyData;
      console.log(this.userview)

      this.dailypercent = Math.round((this.userview.moves / this.userview.totalCount) * 100);
      // this.intvalue = Math.round(this.dailypercent);
      // this.dailypercent = Math.round((this.userview.moves / this.userview.totalCount) * 100);
      var hour = Math.floor(this.userview.totalActiveMinutes / 60);
      var minute = this.userview.totalActiveMinutes - (hour * 60);
      this.active =  hour +" h "+ minute +" m ";
      console.log(this.active);

      resultArray.dailyData = this.userview.totalCount;
      this.userview.totalCount;
     
      var hour = Math.floor(this.userview.totalInactiveMinutes / 60);
      var minute = this.userview.totalInactiveMinutes - (hour * 60);
      this.Inactive =  hour +" h "+ minute +" m ";
      
      this.imageLoader = false;



      this.userview.data.forEach(obj => {
        this.datearray.push(obj.hour);
        this.temp_array.push(parseInt(obj.activeMinutes));
      });
      this.dashboardData = { "data": this.temp_array, "label": "No. of User Registered" }
      this.temp_array2.push(this.temp_array);
      this.temp_array2[0][0] = 23;
      this.lineChartData = this.temp_array2;

    })
    this.clickme()
    this.graph();
  }





  public updatebreed(userForm: NgForm) {
    this.ub.updatefoodcompany(userForm.value);
  }
  public clickme() {
    this.canvas = document.getElementById('petChartss');
    console.log(this.datearray);
    if (this.canvas) {
      this.ctx = this.canvas.getContext('2d');
      this.revenueChart = new Chart(this.ctx, {
        type: 'line',
        options: {
          responsive: true
        }
      });
      this.revenueChart.destroy();
      this.revenueChart = new Chart(this.ctx, {
        type: 'line',
        data: {
          labels: this.datearray,
          datasets: [{
            label: 'No. of User Registered',
            data: this.temp_array,
            backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true          
        }
      });
      this.revenueChart.update();
    }
  }
  /* For User Pet Detail Services  */
  public edituserview() {
    this.apiSerivce.edituserpetdetail({ 'user_id': this.user_id, 'pet_id': this.pet_id }).subscribe(resultArray => {
      console.log(resultArray)
      this.userview = resultArray.petdetail;

    })
  }

  /* Represent Submit Function  */
  onSubmit() {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    this.userForm.value.user_id = this.user_id;
    this.submited = true;

  }

  /* Represent Graph Activity Function  */
  graph() {

    console.log(this.temp1);
    // this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    this.lineChartType = 'line';
    this.lineChartColors = [
      { // grey
        backgroundColor: 'transparent',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
      }
    ]
  }


  /* Represent Graph  */
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }


  /* For Week Activity Function  */
  weekData() {

    this.imageLoader = true;
    var form_date = this.date,
      month = '' + (form_date.getMonth() + 1),
      day = '' + form_date.getDate(),
      year = form_date.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    var k = [year, month, day].join('-');
    this.datearray = []
    this.temp_array = []
    /* Date Formatted in hyphen-minus */
    let data_week_start = this.form_date.week_start.formatted;
    data_week_start = data_week_start.split('.').reverse().join('-')

    let data_week_end = this.form_date.week_end.formatted;
    data_week_end = data_week_end.split('.').reverse().join('-')

    /* For Week Activity Services  */
    this.apiSerivce.graphdetail({
      'user_id': this.user_id, 'pet_id': this.pet_id,
       'activity_date': k, 'week_start': data_week_start, 
        'week_end': data_week_end, 'current_time': k,
      'graph_status': '2'
    }).subscribe(resultArray => {
      console.log(resultArray)
      this.userview = resultArray.weekData;
      resultArray.weekData = this.userview.totalCount;
      
      this.dailypercent = Math.round((this.userview.moves / this.userview.totalCount) * 100);
      var hour = Math.floor(this.userview.totalActiveMinutes / 60);
      var minute = this.userview.totalActiveMinutes - (hour * 60);
      this.active =  hour +" h "+ minute +" m ";
     
      var hour = Math.floor(this.userview.totalInactiveMinutes / 60);
      var minute = this.userview.totalInactiveMinutes - (hour * 60);
      this.Inactive =  hour +" h "+ minute +" m ";
      
      console.log(this.Inactive,hour,minute)
      this.imageLoader = false;
      this.userview.data.forEach(obj => {
        this.datearray.push(obj.date);
        this.temp_array.push(obj.activeMinutes);
      });

      this.dashboardData = { "data": this.temp_array, "label": "No. of User Registered" }
      this.temp_array2 = this.temp_array;
      this.lineChartData = this.temp_array2;
      this.clickme()

    })
  }

  /* For Monthly Activity Function  */
  monthlyData(id) {

    // alert(2)
console.log(this.userForms.value)
    /* Date Format */
    this.imageLoader = true;
    console.log(this.date)
    var form_date = this.date,
      month = this.userForms.value.month_selected,
      day = '01',
      year1 = this.userForms.value.year_selected;
     
    console.log(year1)

    
     
    var k = [year1, month, day].join('-');
    this.form_date.model3=k
    this.datearray = []
    this.temp_array = []
    console.log(month)
    

  
    /* For Monthly Activity Services  */
    this.apiSerivce.graphdetail({
      'user_id': this.user_id, 'pet_id': this.pet_id, 
      'activity_date'
        : k, 'monthly_date': this.form_date.model3,
         'current_time': k,
      'graph_status': '3'
    }).subscribe(resultArray => {
     
      this.userview = resultArray.monthData;
      resultArray.monthData = this.userview.totalCount;
      
      this.dailypercent = Math.round((this.userview.moves / this.userview.totalCount) * 100);
      var hour =Math.floor(this.userview.totalActiveMinutes / 60);
      var minute = this.userview.totalActiveMinutes - (hour * 60)
      this.active =  hour +" h "+ minute +" m "
     
      
      var hour = Math.floor(this.userview.totalInactiveMinutes / 60);
      var min = this.userview.totalInactiveMinutes -(hour * 60);
      this.Inactive = hour +" h "+ min +" m "
      
        this.imageLoader = false;
        this.form_date.model3.formatted;
        this.userview.data.forEach(obj => {
        this.datearray.push(obj.date);
        this.temp_array.push(obj.activeMinutes);
      });


      
      this.clickme()

    })
  }

  /* For Day Activity Function  */
  graphDetailDay() {


    /* Date Formatted in hyphen-minus */
    let dayDate = this.form_date.model.formatted;
    dayDate = dayDate.split('.').reverse().join('-')
    this.datearray = []
    this.temp_array = []
    /* For Day Activity Services  */
    this.imageLoader = true;

    this.apiSerivce.graphdetail({
      'user_id': this.user_id, 'pet_id': this.pet_id, 'activity_date'
        : dayDate,
      'graph_status': '1'
    }).subscribe(resultArray => {
      console.log(resultArray)

      this.userview = resultArray;
      this.userview = resultArray.dailyData;
      this.userview = resultArray.dailyData;

      this.dailypercent = Math.round((this.userview.moves / this.userview.totalCount) * 100);
      var hour = Math.floor(this.userview.totalActiveMinutes / 60);
      var minute = this.userview.totalActiveMinutes - (hour * 60);
      this.active =  hour +" h "+ minute +" m ";
      console.log(this.active);
     

      // this.active = Math.round(this.userview.totalActiveMinutes / 60);

      var twoPlacedFloat = parseFloat(this.active).toFixed(2);

      // this.Inactive = Math.round(this.userview.totalInactiveMinutes / 60);
      var hour = Math.floor(this.userview.totalInactiveMinutes / 60);
      var minute = this.userview.totalInactiveMinutes - (hour * 60);
      this.Inactive =  hour +" h "+ minute +" m ";
      

      this.imageLoader = false; 


      this.userview.data.forEach(obj => {
        this.datearray.push(obj.hour);
        this.temp_array.push(obj.activeMinutes);
      });

      this.dashboardData = { "data": this.temp_array, "label": "No. of User Registered" }

      this.temp_array2.push(this.temp_array);

      this.lineChartData = this.temp_array2;
      this.clickme()
    })
  }
 
}