import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { UpdateLifeStyleComponent} from './../lifestyle/update-life-style/update-life-style.component';
// import { AddLifeStyleComponent} from './../lifestyle/add-lifestyle/add-lifestyle.component';
// import { ListLifeStyleComponent } from './../lifestyle/list-life-style/list-life-style.component'
// import { UserListFilter } from 'app/components/users/user-list/filter.pipe';
import { UserListFilter } from 'app/broadcast notification/broadcast-notification/filter.pipe';
import { BroadcastNotificationComponent } from './../broadcast notification/broadcast-notification/broadcast-notification.component';
const routes: Routes = [
  
  {
    path: '',
    data: {
      title: 'broadcastnotification'
    },
    children: [
   
      {
        path: 'broadcast-notification',
        component: BroadcastNotificationComponent,
        data: {
          title: 'broadcast-notification'
        }
      },
//       {
//         path: 'add-lifestyle1',
//         component: AddLifeStyleComponent,
//         data: {
//           title: 'add-lifestyle1'
//         }
//       },
//       {
//         path: 'list-life-style',
//         component:  ListLifeStyleComponent,
//         data: {
//           title: 'list-life-style'
//         }
//       },
//       {
//         path: 'list-life-style1',
//         component:  ListLifeStyleComponent,
//         data: {
//           title: 'list-life-style1'
//         }
//       },
//       {
//         path: 'list-life-style/:lifestyle_id',
//         component: UpdateLifeStyleComponent,
//         data: {
//           title: 'update-life-style'
//         }
//       },
//       {
//         path: 'update-life-style',
//         component:  UpdateLifeStyleComponent,
//         data: {
//           title: 'update-life-style'
//         }
//       },
     
   
   ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BroadcastNotificationRoutingModule {}
