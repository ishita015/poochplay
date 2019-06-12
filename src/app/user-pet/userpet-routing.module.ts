import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Represent User Pet Detail Path */
import { UserPetListComponent} from './../user-pet/user-pet-list/user-pet-list.component';
import { UserPetDetailComponent} from './../user-pet/user-pet-detail/user-pet-detail.component';

 /* Represent Router Path */
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'userpet'
    },
    children: [
      {
        path: 'user-pet-list/:user_id',
        component: UserPetListComponent,
        data: {
          title: 'user-pet-list'
        }
      },
      {
        path: 'user-pet-detail/:user_id/:pet_id',
        component: UserPetDetailComponent,
        data: {
          title: 'user-pet-list'
        }
       },
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPetRoutingModule {}
