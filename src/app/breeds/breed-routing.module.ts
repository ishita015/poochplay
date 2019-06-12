import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddBreedsComponent } from './../breeds/add-breeds/add-breeds.component';
import { ImportBreedsComponent } from './../breeds/import-breeds/import-breeds.component';
import { ViewBreedsComponent } from './../breeds/view-breeds/view-breeds.component';
import { ListBreedCategoryComponent } from './../breeds/list-breed-category/list-breed-category.component'
import { AddBreedCategoryComponent } from './../breeds/add-breed-category/add-breed-category.component';
import { UpdateBreedComponent} from './../breeds/update-breed/update-breed.component';
import { UpdateBreedCategoryComponent} from './../breeds/update-breed-category/update-breed-category.component';

const routes: Routes = [
  
  {
    path: '',
    data: {
      title: 'breed'
    },
    children: [
      {
        path: 'add-breeds',
        component: AddBreedsComponent,
        data: {
          title: 'add-breeds'
        }
      },
      {
        path: 'add-breed-category',
        component: AddBreedCategoryComponent,
        // redirectTo: 'add-breed-category',
        data: {
          title: 'add-breed-category'
        }
        
      },
      
      {
        path: 'import-breeds',
        component: ImportBreedsComponent,
        data: {
          title: 'import-breeds'
        }
      },
      {
        path: 'list-breed-category',
        component: ListBreedCategoryComponent,
        data: {
          title: 'list-breed-category'
        }
      },
      {
        path: 'list-breed-category/:breed_category_id',
        component: UpdateBreedCategoryComponent,
        data: {
          title: 'update-breed-category'
        }
      },
      
      {
        path: 'view-breeds',
        component: ViewBreedsComponent,
        data: {
          title: 'view-breeds'
        }
      },
      {
        path: 'view-breeds/:breed_id',
        component: UpdateBreedComponent,
        data: {
          title: 'update-breeds'
        }
      },
      
     
   
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BreedRoutingModule {}
