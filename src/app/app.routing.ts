import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';

export const routes: Routes = [

  {
    path: '',
    component: FullLayoutComponent,
    data: {
      
    },
    children: [
      // { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
       { path: 'components', pathMatch: 'full', redirectTo: 'dashboard' },
       { path: 'pets', pathMatch: 'full', redirectTo: 'pets/list-pet-type' },
       { path: 'bodycondition', pathMatch: 'full', redirectTo: 'bodycondition/list-body-condition' },
       { path: 'remaindertype', pathMatch: 'full', redirectTo: 'remaindertype/list-remainder-type' },
       { path: 'lifestyle', pathMatch: 'full', redirectTo: 'lifestyle/list-life-style' },
       { path: 'breed', pathMatch: 'full', redirectTo: 'breed/view-breeds' },
       { path: 'foods', pathMatch: 'full', redirectTo: 'foods/list-food-company' },
       { path: 'users', pathMatch: 'full', redirectTo: 'users/user-list' },
       { path: 'user-pet', pathMatch: 'full', redirectTo: 'users/user-list' },
       { path: 'broadcast-notification', pathMatch: 'full', redirectTo: 'broadcast-notification/broadcast-notification' },
       
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },

      {
        path: 'pets',
        loadChildren: './pet/pet.module#PetsModule'
      },
      {
        path: 'bodycondition',
        loadChildren: './body condition/bodycondition.module#BodyConditionModule'
      },
      {
        path: 'remaindertype',
        loadChildren: './remainder type/remaindertype.module#RemainderTypeModule'
      },
      {
        path: 'lifestyle',
        loadChildren: './lifestyle/lifestyle.module#LifeStyleModule'
      },
      {
        path: 'breed',
        loadChildren: './breeds/breed.module#BreedModule'
      },
      {
        path: 'foods',
        loadChildren: './foods/foods.module#FoodsModule'
      },
      {
        path: 'users',
        loadChildren: './users/users.module#UsersModule'
      },
      {
        path: 'user-pet',
        loadChildren: './user-pet/userpet.module#UserPetModule'
      },
      {
        path: 'broadcast-notification',
        loadChildren: './broadcast notification/broadcast-notification.module#BroadcastNotificationModule'
      },
      {
        path: 'page',
        loadChildren: './page/page.module#PageModule'
      },
    ]
  },
  {
    path: 'login',
    component: SimpleLayoutComponent,
    data: {
      title: 'Pages'
    },
    children: [
      {
        path: '',
        loadChildren: './pages/pages.module#PagesModule',
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
