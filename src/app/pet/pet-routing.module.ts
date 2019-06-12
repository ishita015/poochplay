import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPetComponent} from './add-pet/add-pet.component';
import { ListPetTypeComponent } from './list-pet-type/list-pet-type.component'

import { UpdatePetTypeComponent } from './update-pet-type/update-pet-type.component';

const routes: Routes = [
  
  {
    path: '',
    data: {
      title: 'pets'
    },
    children: [
    {
        path: 'list-pet-type',
        component: ListPetTypeComponent,
        data: {
          title: 'list-pet-type'
        }
      },
      {
        path: 'list-pet-type1',
        component: ListPetTypeComponent,
        data: {
          title: 'list-pet-type1'
        }
      },
      
    {
        path: 'add-pet',
        component: AddPetComponent,
        data: {
          title: 'add-pet'
        }
      },
      {
        path: 'add-pet1',
        component: AddPetComponent,
        data: {
          title: 'add-pet1'
        }
      },
     
      {
        path: 'list-pet-type/:pet_type_id',
        component: UpdatePetTypeComponent,
        data: {
          title: 'update-pet-type'
        }
      },
      {
        path: 'update-pet-type',
        component: UpdatePetTypeComponent,
        data: {
          title: 'update-pet-type'
        }
      },

     
   
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetsRoutingModule {}
