// import { Component } from '@angular/core';
// import { MyDataService } from './../../my-data.service';
// import { FormControl, FormGroup, Validators } from '@angular/forms';

// import { HttpClient } from '@angular/common/http';
// import { Http,Headers,Response, RequestOptions } from '@angular/http';
// import { HttpErrorResponse } from '@angular/common/http';
// import 'rxjs/add/operator/map';
// @Component({
//     templateUrl: './add-activity-data.component.html'
// })

// export class AddActivityDataComponent {
//     jqx:any;
//     source: any =
//     {
//         datatype: 'csv',
//         datafields: [
//             { name: 'Quarter' },
//             { name: 'Change' }
//         ],
//         url: '../sampledata/us_gdp_2008-2013.csv'
//     };
//     dataAdapter = new this.jqx.dataAdapter(this.source, { async: false, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + this.source.url + '" : ' + error); } });

//     padding = { left: 5, top: 5, right: 10, bottom: 5 };

//     titlePadding = { left: 0, top: 0, right: 0, bottom: 10 };

//     categoryAxis =
//     {
//         dataField: 'Quarter',
//         unitInterval: 1,
//         textRotationAngle: -75,
//         formatFunction: (value: any) => {
//             return value;
//         },
//         valuesOnTicks: false
//     };

//     seriesGroups =
//     [
//         {
//             type: 'line',
//             valueAxis:
//             {
//                 description: 'Percentage Change',
//                 formatFunction: (value: any) => {
//                     return value + '%';
//                 }
//             },
//             series:
//             [
//                 {
//                     dataField: 'Change',
//                     displayText: 'Change',
//                     // Modify this function to return desired colors.
//                     // jqxChart will call the function for each data point.
//                     // Sequential points that have the same color will be
//                     // grouped automatically in a line segment
//                     colorFunction: (value: any) => {
//                         return (value < 0) ? '#FF0000' : '#00FF00';
//                     }
//                 }
//             ]
//         }
//     ];
// }