import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MyDataService } from './../my-data.service';

import { ListBodyConditionComponent } from './../body condition/list-body-condition/list-body-condition.component'
import { UpdateBodyConditionComponent } from './../body condition/update-body-condition/update-body-condition.component';

import {ListBodyFilter} from './../body condition/list-body-condition/filter.pipe';
import { AddBodyConditionComponent } from './../body condition/add-body-condition/add-body-condition.component';
import {BodyConditionRoutingModule} from './bodycondition-routing.module';
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
    BodyConditionRoutingModule,
    FormsModule, ReactiveFormsModule,CommonModule,HttpModule,MatCheckboxModule,MatDialogModule,DialogModule,NgxPaginationModule,MyDatePickerModule
    // BrowserAnimationsModule,
  ],
  declarations: [
    AddBodyConditionComponent,
    ListBodyFilter,
    ListBodyConditionComponent,
    UpdateBodyConditionComponent,
],
  exports: [MatCheckboxModule,MatDialogModule,MatFormFieldModule],
  entryComponents: [],
  providers: [MyDataService]
  
})
export class BodyConditionModule { }
