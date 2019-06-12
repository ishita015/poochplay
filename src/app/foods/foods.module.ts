import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MyDataService } from './../my-data.service';

import { AllFoodsComponent} from './../foods/all-foods/all-foods.component';
import { AddFoodsComponent } from './../foods/add-foods/add-foods.component';
import { AddFoodProductComponent } from './../foods/addfoodproduct/add-food-product.component';
import { ListFoodCompanyComponent } from './../foods/list-food-company/list-food-company.component'
import { ListFoodProductComponent } from './../foods/list-food-product/list-food-product.component'
import { UpdateFoodCompanyComponent } from './../foods/update-food-company/update-food-company.component';
import { UpdateFoodProductComponent } from './../foods/update-food-product/update-food-product.component';
import { ListFoodCompanyFilter } from 'app/foods/list-food-company/filter.pipe';
import { ListFoodProductFilter } from 'app/foods/list-food-product/filter.pipe';

import {FoodsRoutingModule} from './foods-routing.module';
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
    FoodsRoutingModule,
    FormsModule, ReactiveFormsModule,CommonModule,HttpModule,MatCheckboxModule,MatDialogModule,DialogModule,NgxPaginationModule,MyDatePickerModule
    // BrowserAnimationsModule,
  ],
  declarations: [
    AllFoodsComponent,
    AddFoodsComponent,
    AddFoodProductComponent,
    ListFoodCompanyComponent,
    ListFoodProductComponent,
    UpdateFoodCompanyComponent,
    UpdateFoodProductComponent,
    ListFoodCompanyFilter,
    ListFoodProductFilter,
],
  exports: [MatCheckboxModule,MatDialogModule,MatFormFieldModule],
  entryComponents: [],
  providers: [MyDataService]
  
})
export class FoodsModule { }
