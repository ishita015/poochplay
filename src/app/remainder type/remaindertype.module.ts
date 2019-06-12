import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MyDataService } from './../my-data.service';

import { UpdateRemainderTypeComponent } from './../remainder type/update-reminder-type/update-reminder-type.component';
import { ListRemainderTypeComponent } from './../remainder type/list-reminder-type/list-reminder-type.component'
import { AddRemainderComponent } from './../remainder type/add-reminder/add-reminder.component';
import {ListRemainderFilter} from './../remainder type/list-reminder-type/filter.pipe'
import {RemainderTypeRoutingModule} from './remaindertype-routing.module';

import { MatCheckboxModule } from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';  
import {DialogModule} from 'primeng/dialog';
import { NgxPaginationModule } from 'ngx-pagination';
import { MyDatePickerModule } from 'mydatepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
@NgModule({
  imports: [
    RemainderTypeRoutingModule,
    FormsModule, ReactiveFormsModule,CommonModule,HttpModule,MatCheckboxModule,MatDialogModule,DialogModule,NgxPaginationModule,MyDatePickerModule
    // BrowserAnimationsModule,
  ],
  declarations: [
    AddRemainderComponent,
    ListRemainderFilter,
    ListRemainderTypeComponent,
    UpdateRemainderTypeComponent,
],
  exports: [MatCheckboxModule,MatDialogModule,MatFormFieldModule],
  entryComponents: [],
  providers: [MyDataService]
  
})
export class RemainderTypeModule { }
