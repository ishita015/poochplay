import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateRemainderTypeComponent } from './../remainder type/update-reminder-type/update-reminder-type.component';
import { ListRemainderTypeComponent } from './../remainder type/list-reminder-type/list-reminder-type.component'
import { AddRemainderComponent } from './../remainder type/add-reminder/add-reminder.component';
const routes: Routes = [
  
  {
    path: '',
    data: {
      title: 'reminder type'
    },
    children: [
      {
        path: 'add-reminder',
        component: AddRemainderComponent,
        data: {
          title: 'add-reminder'
        }
      },
      {
        path: 'add-reminder1',
        component: AddRemainderComponent,
        data: {
          title: 'add-reminder1'
        }
      },
      {
        path: 'list-reminder-type',
        component: ListRemainderTypeComponent,
        data: {
          title: 'list-reminder-type'
        }
      },
      {
        path: 'list-reminder-type1',
        component: ListRemainderTypeComponent,
        data: {
          title: 'list-reminder-type1'
        }
      },
      {
        path: 'list-reminder-type/:reminder_id',
        component: UpdateRemainderTypeComponent,
        data: {
          title: 'update-reminder-type'
        }
      },
      {
        path: 'update-reminder-type',
        component: UpdateRemainderTypeComponent,
        data: {
          title: 'update-reminder-type'
        }
      },

   
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RemainderTypeRoutingModule {}
