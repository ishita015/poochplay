import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MyDataService } from './../my-data.service';

import { UpdateLifeStyleComponent} from './../lifestyle/update-life-style/update-life-style.component';
import { AddLifeStyleComponent} from './../lifestyle/add-lifestyle/add-lifestyle.component';
import { ListLifeStyleComponent } from './../lifestyle/list-life-style/list-life-style.component'
import {LifeStyleRoutingModule} from './lifestyle-routing.module';
import { ListLifeStyleFilter } from 'app/lifestyle/list-life-style/filter.pipe';


import { MatCheckboxModule } from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';  
import {DialogModule} from 'primeng/dialog';
// import {MatDatepickerModule} from '@angular/material/datepicker';
// import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxPaginationModule } from 'ngx-pagination';

// import { DialogOverviewExampleDialog } from './body condition/add-body-condition/add-body-condition.component';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
// import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {CheckboxOverviewExample} from './app/checkbox-overview-example';
 import { MyDatePickerModule } from 'mydatepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
@NgModule({
  imports: [
    LifeStyleRoutingModule,
    FormsModule, ReactiveFormsModule,CommonModule,HttpModule,MatCheckboxModule,MatDialogModule,DialogModule,NgxPaginationModule,MyDatePickerModule
    // BrowserAnimationsModule,
  ],
  declarations: [
    UpdateLifeStyleComponent,
    AddLifeStyleComponent,
    ListLifeStyleComponent,
    ListLifeStyleFilter,
],
  exports: [MatCheckboxModule,MatDialogModule,MatFormFieldModule],
  entryComponents: [],
  providers: [MyDataService]
  
})
export class LifeStyleModule { }
