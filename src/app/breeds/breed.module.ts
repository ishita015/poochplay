import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MyDataService } from './../my-data.service';

import { AddBreedsComponent } from './../breeds/add-breeds/add-breeds.component';
import { ImportBreedsComponent } from './../breeds/import-breeds/import-breeds.component';
import { ViewBreedsComponent } from './../breeds/view-breeds/view-breeds.component';
import { ListBreedCategoryComponent } from './../breeds/list-breed-category/list-breed-category.component'
import { AddBreedCategoryComponent } from './../breeds/add-breed-category/add-breed-category.component';
import { UpdateBreedComponent} from './../breeds/update-breed/update-breed.component';
import { UpdateBreedCategoryComponent} from './../breeds/update-breed-category/update-breed-category.component';
import { ListBreedFilter } from 'app/breeds/view-breeds/filter.pipe';
import { ListBreedCatFilter } from 'app/breeds/list-breed-category/filter.pipe';


import {BreedRoutingModule} from './breed-routing.module';
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
    BreedRoutingModule,
    FormsModule, ReactiveFormsModule,CommonModule,HttpModule,MatCheckboxModule,MatDialogModule,DialogModule,NgxPaginationModule,MyDatePickerModule
    // BrowserAnimationsModule,
  ],
  declarations: [
    AddBreedsComponent ,
    AddBreedCategoryComponent,
    ImportBreedsComponent,
    ViewBreedsComponent,
    ListBreedCategoryComponent,
    UpdateBreedComponent,
    UpdateBreedCategoryComponent,
    ListBreedFilter,
    ListBreedCatFilter,
],
  exports: [MatCheckboxModule,MatDialogModule,MatFormFieldModule],
  entryComponents: [],
  providers: [MyDataService]
  
})
export class BreedModule { }
