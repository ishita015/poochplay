import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MyDataService } from './my-data.service';
import { CookieService } from 'ngx-cookie-service';
// import { CustomFormsModule } from 'ng2-validation'


import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';


import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { AsideToggleDirective } from './shared/aside.directive';

// Routing Module
import { AppRoutingModule } from './app.routing';
import {  MatDialogModule, } from '@angular/material';
// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';
import { JsonpModule } from '@angular/http';


import { environment } from './../environments/environment';
import {DialogModule} from 'primeng/dialog';

import {CdkTableModule} from '@angular/cdk/table';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AddBodyConditionComponent } from 'app/body condition/add-body-condition/add-body-condition.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { MatCheckboxModule,MatTabsModule,MatRadioModule,MatDatepickerModule,MatFormFieldModule} from '@angular/material';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';  
import { NgCircleProgressModule } from 'ng-circle-progress';

import { NgxPaginationModule } from 'ngx-pagination';

import { Md5 } from 'ts-md5/dist/md5';
import { NgxEditorModule } from 'ngx-editor';

// import { ListBodyFilter } from 'app/body condition/list-body-condition/filter.pipe';
// import { ListBreedFilter } from 'app/breeds/view-breeds/filter.pipe';
// import { ListBreedCatFilter } from 'app/breeds/list-breed-category/filter.pipe';

@NgModule({
  imports: [
    // ListBreedFilter,
    // CustomFormsModule,
    NgxPaginationModule,
    DialogModule,
    NgxEditorModule,
    MatDialogModule,
    CdkTableModule,
    BrowserAnimationsModule,
    HttpModule,
    MatDatepickerModule,
    MatFormFieldModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,HttpClientModule
    // NgCircleProgressModule.forRoot({
    //   // set defaults here
    //   radius: 100,
    //   outerStrokeWidth: 16,
    //   innerStrokeWidth: 8,
    //   outerStrokeColor: "#78C000",
    //   innerStrokeColor: "#C7E596",
    //   animationDuration: 300,
    // })
   
    
  ],
  exports: [
    MatDialogModule,
    MatFormFieldModule,
    CdkTableModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    // ListBreedFilter,
  
    
  ],
  declarations: [
    AppComponent,
    FullLayoutComponent,
    SimpleLayoutComponent,
    NAV_DROPDOWN_DIRECTIVES,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective,
    // ListBodyFilter,
    // ListBreedFilter,
    // ListBreedCatFilter,
    
  ],
  
  providers: [
  Md5,
  CookieService,
  MyDataService,
  {provide: LocationStrategy, useClass: HashLocationStrategy}

],

  bootstrap: [ AppComponent ]
})
export class AppModule { }
