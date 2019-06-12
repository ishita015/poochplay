import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MyDataService } from './../my-data.service';


import { ListPetTypeComponent } from './list-pet-type/list-pet-type.component'

import { AddPetComponent} from './add-pet/add-pet.component';

 


// import { Ng2SearchPipeModule } from 'ng2-search-filter'; //importing the module

import { UpdatePetTypeComponent } from './update-pet-type/update-pet-type.component';

//  import { FilterPipe} from './breeds/view-breeds/filter.pipe';
//  import { Filters} from './lifestyle/list-life-style/filter.pipe';
 
 import {ListPetFilter} from './list-pet-type/filter.pipe';
 import {PetsRoutingModule} from './pet-routing.module';

import { ListLifeStyleFilter } from 'app/lifestyle/list-life-style/filter.pipe';
// import { ListBreedCatFilter } from 'app/components/breeds/list-breed-category/filter.pipe';
// import { ListFoodCompanyFilter } from 'app/components/foods/list-food-company/filter.pipe';
// import { ListFoodProductFilter } from 'app/components/foods/list-food-product/filter.pipe';
// import { ListBreedFilter } from 'app/components/breeds/view-breeds/filter.pipe';
// import { UserListFilter } from 'app/components/users/user-list/filter.pipe';

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
    PetsRoutingModule,
    FormsModule, ReactiveFormsModule,CommonModule,HttpModule,MatCheckboxModule,MatDialogModule,DialogModule,NgxPaginationModule,MyDatePickerModule
    // BrowserAnimationsModule,
  ],
  declarations: [
    AddPetComponent,
    UpdatePetTypeComponent,
    ListPetFilter,
    ListPetTypeComponent,
    UpdatePetTypeComponent,
   
    // Ng2SearchPipeModule,
    
   
  ],
  exports: [MatCheckboxModule,MatDialogModule,MatFormFieldModule],
  entryComponents: [],
  providers: [MyDataService]
  
})
export class PetsModule { }
