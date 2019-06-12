import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyDataService } from './../my-data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';
import { dashboard } from './../models/dashboard';
import 'rxjs/add/operator/map'
import * as Chart from 'chart.js';
@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  public object: any = {};
  dashboard: any = {};
  datearray: any = [];
  temp_array: any = [];
  temp_array2: any = [];
  temp_array3: any = [];
  dashboardData: any;
  user: any;

  public labelsData: any = [];
  response: any;
  public totalUser: any = [];
  public lineData;
  public regDate: any = [];
  public lineChartData: Array<any> = [

  ];
  canvas: any;
  ctx: any;
  revenueChart: any;

  public nav_url = 'dashboard';
  public
  constructor(private apiSerivce: MyDataService) {}
  ngOnInit() {


    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    this.apiSerivce.dashboard({ 'number_of_days': "" }).subscribe(resultArray => {
      this.dashboard = resultArray.response,
        console.log(this.dashboard.today_total_pet),
        console.log(this.user = this.dashboard.user_graph_detail);
      this.lineData = this.dashboard;
      console.log(this.lineData.user_graph_detail)
      this.user.forEach(obj => {
        console.log(obj)
        this.datearray.push(obj.no_of_users);
        this.temp_array.push(obj.register_date);
      });
      console.log(this.temp_array);
      this.lineData.pet_graph_detail.forEach(obj => {
        this.totalUser.push(obj.no_of_pets);
        this.regDate.push(obj.register_date);

        console.log(this.totalUser)
      });
      this.dashboardData = { "data": this.temp_array, "label": "No. of Users" }
      this.dashboardData = { "data": this.regDate, "label": "No. of pets" }
      this.temp_array2.push(this.temp_array);
      console.log(this.temp_array);
      this.temp_array3.push(this.regDate)
      console.log(this.regDate);
      // this.temp_array2[0][0] = 23;
      this.lineChartData = this.temp_array2;
      this.lineChartData = this.temp_array3;
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
            labels: this.temp_array,
            datasets: [{
              label: 'No. of Users',
              data: this.datearray,
              backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
              ],
              borderColor: [
                'rgba(0, 0, 0, 0.5)',
                'rgba(0, 0, 0, 0.5)',
                'rgba(0, 0, 0, 0.5)'
              ],
              borderWidth: 1
            },
            // 0, 0, 0, 0.5
            {
              label: 'No. of Pets',
              data: this.totalUser,
              backgroundColor: [
                'rgba(0,0,255,0.3)',
                'rgba(0,0,255,0.3)',
                'rgba(0,0,255,0.3)'
              ],
              borderColor: [
                'rgba(0, 0, 0, 0.5)',
                'rgba(0, 0, 0, 0.5)',
                'rgba(0, 0, 0, 0.5)'
              ],
              borderWidth: 1
            }
            ]
          },

          options: {
            responsive: true
          }
        });
        this.revenueChart.update();
      }
      //  console.log(this.dashboardData);
    });

    // generate random values for mainChart
    // for (let i = 0; i <= 27; i++) {
    //   console.log(this.totalUser)
    //   this.mainChartData1=this.totalUser;
    //   console.log(this.mainChartData1)
    //   // this.mainChartData2.push(this.random(80, 100));
    //   // this.mainChartData3.push(65);
    // }
    // console.log('YYYYYYYYY')
    // console.log(this.regDate)
    // this.mainChartData2.push(this.regDate);
    // this.test(this.regDate);



  }




  public brandPrimary = '#20a8d8';
  public brandSuccess = '#4dbd74';
  public brandInfo = '#63c2de';
  public brandWarning = '#f8cb00';
  public brandDanger = '#f86c6b';

  // dropdown buttons
  public status: { isopen } = { isopen: false };
  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  // convert Hex to RGBA
  public convertHex(hex: string, opacity: number) {
    hex = hex.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    const rgba = 'rgba(' + r + ', ' + g + ', ' + b + ', ' + opacity / 100 + ')';
    return rgba;
  }

  // events
  // public chartClicked(e: any): void {
  //   console.log(e);
  // }

  // public chartHovered(e: any): void {
  //   console.log(e);
  // }

  // lineChart1
  // public lineChart1Data: Array<any> = [
  //   {
  //     data: [65, 59, 84, 84, 51, 55, 40],
  //     label: 'Series A'
  //   }
  // ];
  // public lineChart1Labels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  // public lineChart1Options: any = {
  //   maintainAspectRatio: false,
  //   scales: {
  //     xAxes: [{
  //       gridLines: {
  //         color: 'transparent',
  //         zeroLineColor: 'transparent'
  //       },
  //       ticks: {
  //         fontSize: 2,
  //         fontColor: 'transparent',
  //       }

  //     }],
  //     yAxes: [{
  //       display: false,
  //       ticks: {
  //         display: false,
  //         min: 40 - 5,
  //         max: 84 + 5,
  //       }
  //     }],
  //   },
  //   elements: {
  //     line: {
  //       borderWidth: 1
  //     },
  //     point: {
  //       radius: 4,
  //       hitRadius: 10,
  //       hoverRadius: 4,
  //     },
  //   },
  //   legend: {
  //     display: false
  //   }
  // };
  // public lineChart1Colours: Array<any> = [
  //   { // grey
  //     backgroundColor: this.brandPrimary,
  //     borderColor: 'rgba(255,255,255,.55)'
  //   }
  // ];
  // public lineChart1Legend = false;
  // public lineChart1Type = 'line';

  // lineChart2
  // public lineChart2Data: Array<any> = [
  //   {
  //     data: [1, 18, 9, 17, 34, 22, 11],
  //     label: 'Series A'
  //   }
  // ];

  // public lineChart2Labels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  // public lineChart2Options: any = {
  //   maintainAspectRatio: false,
  //   scales: {
  //     xAxes: [{
  //       gridLines: {
  //         color: 'transparent',
  //         zeroLineColor: 'transparent'
  //       },
  //       ticks: {
  //         fontSize: 2,
  //         fontColor: 'transparent',
  //       }

  //     }],
  //     yAxes: [{
  //       display: false,
  //       ticks: {
  //         display: false,
  //         min: 1 - 9,
  //         max: 34 + 5,
  //       }
  //     }],
  //   },
  //   elements: {
  //     line: {
  //       tension: 0.00001,
  //       borderWidth: 1
  //     },
  //     point: {
  //       radius: 4,
  //       hitRadius: 10,
  //       hoverRadius: 4,
  //     },
  //   },
  //   legend: {
  //     display: false
  //   }
  // };
  // public lineChart2Colours: Array<any> = [
  //   { // grey
  //     backgroundColor: this.brandInfo,
  //     borderColor: 'rgba(255,255,255,.55)'
  //   }
  // ];
  // public lineChart2Legend = false;
  // public lineChart2Type = 'line';


  // // lineChart3
  // public lineChart3Data: Array<any> = [
  //   {
  //     data: [78, 81, 80, 45, 34, 12, 40],
  //     label: 'Series A'
  //   }
  // ];
  // public lineChart3Labels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  // public lineChart3Options: any = {
  //   maintainAspectRatio: false,
  //   scales: {
  //     xAxes: [{
  //       display: false
  //     }],
  //     yAxes: [{
  //       display: false
  //     }]
  //   },
  //   elements: {
  //     line: {
  //       borderWidth: 2
  //     },
  //     point: {
  //       radius: 0,
  //       hitRadius: 10,
  //       hoverRadius: 4,
  //     },
  //   },
  //   legend: {
  //     display: false
  //   }
  // };
  // public lineChart3Colours: Array<any> = [
  //   {
  //     backgroundColor: 'rgba(255,255,255,.2)',
  //     borderColor: 'rgba(255,255,255,.55)',
  //   }
  // ];
  // public lineChart3Legend = false;
  // public lineChart3Type = 'line';


  // // barChart1
  // public barChart1Data: Array<any> = [
  //   {
  //     data: [78, 81, 80, 45, 34, 12, 40, 78, 81, 80, 45, 34, 12, 40, 12, 40],
  //     label: 'Series A'
  //   }
  // ];
  // public barChart1Labels: Array<any> = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'];
  // public barChart1Options: any = {
  //   maintainAspectRatio: false,
  //   scales: {
  //     xAxes: [{
  //       display: false,
  //       barPercentage: 0.6,
  //     }],
  //     yAxes: [{
  //       display: false
  //     }]
  //   },
  //   legend: {
  //     display: false
  //   }
  // };
  // public barChart1Colours: Array<any> = [
  //   {
  //     backgroundColor: 'rgba(255,255,255,.3)',
  //     borderWidth: 0
  //   }
  // ];
  // public barChart1Legend = false;
  // public barChart1Type = 'bar';

  // mainChart

  // public random(min: number, max: number) {
  //   return Math.floor(Math.random() * (max - min + 1) + min);
  // }

  // public mainChartElements = 27;
  // public mainChartData1: Array<number> = [];
  // public mainChartData2: Array<number> = [];
  // public mainChartData3: Array<number> = [];

  // public mainChartData: Array<any> = [
  //   {
  //     data: this.mainChartData1,
  //     label: 'Current'
  //   },
  //   {
  //     data: this.mainChartData2,
  //     label: 'Previous'
  //   }
  //   // {
  //   //   data: this.mainChartData3,
  //   //   label: 'BEP'
  //   // }
  // ];
  /* tslint:disable:max-line-length */
  // public mainChartLabels: Array<any> =  this.regDate;
  // /* tslint:enable:max-line-length */
  // public mainChartOptions: any = {
  //   responsive: true,
  //   maintainAspectRatio: false,
  //   scales: {
  //     xAxes: [{
  //       gridLines: {
  //         drawOnChartArea: false,
  //       },
  //       // ticks: {
  //       //   callback: function(value: any) {
  //       //     return value.charAt(0);
  //       //   }
  //       // }

  //     }],
  //     yAxes: [{
  //       ticks: {
  //         beginAtZero: true,
  //         maxTicksLimit: 5,
  //         stepSize: Math.ceil(250 / 5),
  //         max: 250
  //       }
  //     }]
  //   },
  //   elements: {
  //     line: {
  //       borderWidth: 2
  //     },
  //     point: {
  //       radius: 0,
  //       hitRadius: 10,
  //       hoverRadius: 4,
  //       hoverBorderWidth: 3,
  //     }
  //   },
  //   legend: {
  //     display: false
  //   }
  // };
  // public mainChartColours: Array<any> = [
  //   { // brandInfo
  //     backgroundColor: this.convertHex(this.brandInfo, 10),
  //     borderColor: this.brandInfo,
  //     pointHoverBackgroundColor: '#fff'
  //   },
  //   { // brandSuccess
  //     backgroundColor: 'transparent',
  //     borderColor: this.brandSuccess,
  //     pointHoverBackgroundColor: '#fff'
  //   },
  //   { // brandDanger
  //     backgroundColor: 'transparent',
  //     borderColor: this.brandDanger,
  //     pointHoverBackgroundColor: '#fff',
  //     borderWidth: 1,
  //     borderDash: [8, 5]
  //   }
  // ];
  // public mainChartLegend = false;
  // public mainChartType = 'line';

  // social box charts

  // public socialChartData1: Array<any> = [
  //   {
  //     data: [65, 59, 84, 84, 51, 55, 40],
  //     label: 'Facebook'
  //   }
  // ];
  // public socialChartData2: Array<any> = [
  //   {
  //     data: [1, 13, 9, 17, 34, 41, 38],
  //     label: 'Twitter'
  //   }
  // ];
  // public socialChartData3: Array<any> = [
  //   {
  //     data: [78, 81, 80, 45, 34, 12, 40],
  //     label: 'LinkedIn'
  //   }
  // ];
  // public socialChartData4: Array<any> = [
  //   {
  //     data: [35, 23, 56, 22, 97, 23, 64],
  //     label: 'Google+'
  //   }
  // ];

  // public socialChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  // public socialChartOptions: any = {
  //   responsive: true,
  //   maintainAspectRatio: false,
  //   scales: {
  //     xAxes: [{
  //       display: false,
  //     }],
  //     yAxes: [{
  //       display: false,
  //     }]
  //   },
  //   elements: {
  //     line: {
  //       borderWidth: 2
  //     },
  //     point: {
  //       radius: 0,
  //       hitRadius: 10,
  //       hoverRadius: 4,
  //       hoverBorderWidth: 3,
  //     }
  //   },
  //   legend: {
  //     display: false
  //   }
  // };
  // public socialChartColours: Array<any> = [
  //   {
  //     backgroundColor: 'rgba(255,255,255,.1)',
  //     borderColor: 'rgba(255,255,255,.55)',
  //     pointHoverBackgroundColor: '#fff'
  //   }
  // ];
  // public socialChartLegend = false;
  // public socialChartType = 'line';

  // // sparkline charts

  // public sparklineChartData1: Array<any> = [
  //   {
  //     data: [35, 23, 56, 22, 97, 23, 64],
  //     label: 'Clients'
  //   }
  // ];
  // public sparklineChartData2: Array<any> = [
  //   {
  //     data: [65, 59, 84, 84, 51, 55, 40],
  //     label: 'Clients'
  //   }
  // ];

  // public sparklineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  // public sparklineChartOptions: any = {
  //   responsive: true,
  //   maintainAspectRatio: false,
  //   scales: {
  //     xAxes: [{
  //       display: false,
  //     }],
  //     yAxes: [{
  //       display: false,
  //     }]
  //   },
  //   elements: {
  //     line: {
  //       borderWidth: 2
  //     },
  //     point: {
  //       radius: 0,
  //       hitRadius: 10,
  //       hoverRadius: 4,
  //       hoverBorderWidth: 3,
  //     }
  //   },
  //   legend: {
  //     display: false
  //   }
  // };
  // public sparklineChartDefault: Array<any> = [
  //   {
  //     backgroundColor: 'transparent',
  //     borderColor: '#d1d4d7',
  //   }
  // ];
  // public sparklineChartPrimary: Array<any> = [
  //   {
  //     backgroundColor: 'transparent',
  //     borderColor: this.brandPrimary,
  //   }
  // ];
  // public sparklineChartInfo: Array<any> = [
  //   {
  //     backgroundColor: 'transparent',
  //     borderColor: this.brandInfo,
  //   }
  // ];
  // public sparklineChartDanger: Array<any> = [
  //   {
  //     backgroundColor: 'transparent',
  //     borderColor: this.brandDanger,
  //   }
  // ];
  // public sparklineChartWarning: Array<any> = [
  //   {
  //     backgroundColor: 'transparent',
  //     borderColor: this.brandWarning,
  //   }
  // ];
  // public sparklineChartSuccess: Array<any> = [
  //   {
  //     backgroundColor: 'transparent',
  //     borderColor: this.brandSuccess,
  //   }
  // ];


  // public sparklineChartLegend = false;
  // public sparklineChartType = 'line';


}
