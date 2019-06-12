import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MyDataService } from './../my-data.service';
import { UserPetListComponent} from './../user-pet/user-pet-list/user-pet-list.component';
import { UserPetDetailComponent} from './../user-pet/user-pet-detail/user-pet-detail.component';
import {UserPetRoutingModule} from './userpet-routing.module';
import{UserPetListFilter} from './../user-pet/user-pet-list/filter.pipe';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MatCheckboxModule,MatTabsModule,MatRadioModule,MatDatepickerModule,MatFormFieldModule,MatInputModule,MatRippleModule,MatNativeDateModule} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';  
import {DialogModule} from 'primeng/dialog';
import { NgxPaginationModule } from 'ngx-pagination';
import { ChartsModule } from 'ng2-charts';
import { MyDatePickerModule } from 'mydatepicker';

@NgModule({
  
  imports: [
    UserPetRoutingModule,MatTabsModule,ChartsModule,MatDatepickerModule,MatInputModule,
    MatRippleModule,MatMomentDateModule,  MatNativeDateModule,MyDatePickerModule,
    FormsModule, ReactiveFormsModule,CommonModule,HttpModule,MatCheckboxModule,MatDialogModule,DialogModule,NgxPaginationModule,MatRadioModule
],
  
declarations: [
    UserPetListComponent,
    UserPetDetailComponent,
    UserPetListFilter,
],

exports: [MatCheckboxModule,MatDialogModule,MatFormFieldModule],
  entryComponents: [],
  providers: [MyDataService]
})

export class UserPetModule { }
