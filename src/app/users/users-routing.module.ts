import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent} from './../users/user-list/user-list.component';
import { UserListFilter } from 'app/users/user-list/filter.pipe';
import { UserViewComponent} from './../users/user-view/user-view.component';

const routes: Routes = [
  
  {
    path: '',
    data: {
      title: 'users'
    },
    children: [
      {
        path: 'user-list',
        component: UserListComponent,
        data: {
          title: 'user-list'
        }
      },
      {
        path: 'user-list/:user_id',
        component: UserViewComponent,
        data: {
          title: 'user-list'
        }
      },
   
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
