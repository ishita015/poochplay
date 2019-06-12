import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateLifeStyleComponent} from './../lifestyle/update-life-style/update-life-style.component';
import { AddLifeStyleComponent} from './../lifestyle/add-lifestyle/add-lifestyle.component';
import { ListLifeStyleComponent } from './../lifestyle/list-life-style/list-life-style.component'

const routes: Routes = [
  
  {
    path: '',
    data: {
      title: 'lifestyle'
    },
    children: [
   
      {
        path: 'add-lifestyle',
        component: AddLifeStyleComponent,
        data: {
          title: 'add-lifestyle'
        }
      },
      {
        path: 'add-lifestyle1',
        component: AddLifeStyleComponent,
        data: {
          title: 'add-lifestyle1'
        }
      },
      {
        path: 'list-life-style',
        component:  ListLifeStyleComponent,
        data: {
          title: 'list-life-style'
        }
      },
      {
        path: 'list-life-style1',
        component:  ListLifeStyleComponent,
        data: {
          title: 'list-life-style1'
        }
      },
      {
        path: 'list-life-style/:lifestyle_id',
        component: UpdateLifeStyleComponent,
        data: {
          title: 'update-life-style'
        }
      },
      {
        path: 'update-life-style',
        component:  UpdateLifeStyleComponent,
        data: {
          title: 'update-life-style'
        }
      },
     
   
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LifeStyleRoutingModule {}
