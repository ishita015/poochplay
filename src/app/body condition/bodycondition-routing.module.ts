import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListBodyConditionComponent } from './../body condition/list-body-condition/list-body-condition.component'
import { AddBodyConditionComponent } from './../body condition/add-body-condition/add-body-condition.component';
import { UpdateBodyConditionComponent } from './../body condition/update-body-condition/update-body-condition.component';
const routes: Routes = [
  
  {
    path: '',
    data: {
      title: 'bodycondition'
    },
    children: [
    {
        path: 'add-body-condition',
        component: AddBodyConditionComponent,
        data: {
          title: 'add-body-condition'
        }
      },
      {
        path: 'list-body-condition',
        component: ListBodyConditionComponent,
        data: {
          title: 'list-body-condition'
        }
      },
      {
        path: 'list-body-condition1',
        component: ListBodyConditionComponent,
        data: {
          title: 'list-body-condition1'
        }
      },
      {
        path: 'list-body-condition/:body_id',
        component: UpdateBodyConditionComponent,
        data: {
          title: 'update-body-condition'
        }
      },
      {
        path: 'update-body-condition',
        component: UpdateBodyConditionComponent,
        data: {
          title: 'update-body-condition'
        }
      },
      
     
   
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BodyConditionRoutingModule {}
