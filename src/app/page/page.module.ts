import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MyDataService } from './../my-data.service';
import {PageRoutingModule} from './page-routing.module';
import { AboutUsComponent } from './../page/about-us/about-us.component';
import { PrivacyPolicesComponent } from './../page/privacy-polices/privacy-polices.component';
import { TermsAndConditionComponent } from './../page/terms-and-condition/terms-and-condition.component';
// import { UpdateLifeStyleComponent} from './../lifestyle/update-life-style/update-life-style.component';
// import { AddLifeStyleComponent} from './../lifestyle/add-lifestyle/add-lifestyle.component';
// import { ListLifeStyleComponent } from './../lifestyle/list-life-style/list-life-style.component'
 // import { ListLifeStyleFilter } from 'app/components/lifestyle/list-life-style/filter.pipe';

 import { NgxEditorModule } from 'ngx-editor';

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
    PageRoutingModule,NgxEditorModule,
    FormsModule, ReactiveFormsModule,CommonModule,HttpModule,MatCheckboxModule,MatDialogModule,DialogModule,NgxPaginationModule,MyDatePickerModule
    
  ],
  declarations: [
    AboutUsComponent,
    PrivacyPolicesComponent,
    TermsAndConditionComponent,
   
],
  exports: [MatCheckboxModule,MatDialogModule,MatFormFieldModule],
  entryComponents: [],
  providers: [MyDataService]
  
})
export class PageModule { }
