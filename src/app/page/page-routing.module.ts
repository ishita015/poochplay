import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { UpdateLifeStyleComponent} from './../lifestyle/update-life-style/update-life-style.component';
// import { AddLifeStyleComponent} from './../lifestyle/add-lifestyle/add-lifestyle.component';
// import { ListLifeStyleComponent } from './../lifestyle/list-life-style/list-life-style.component'
import { AboutUsComponent } from './../page/about-us/about-us.component';
import { PrivacyPolicesComponent } from './../page/privacy-polices/privacy-polices.component';
import { TermsAndConditionComponent } from './../page/terms-and-condition/terms-and-condition.component';
const routes: Routes = [
  
  {
    path: '',
    data: {
      title: 'page'
    },
    children: [
   
      {
        path: 'about-us',
        component: AboutUsComponent,
        data: {
          title: 'about-us'
        }
      },
      {
        path: 'privacy-polices',
        component: PrivacyPolicesComponent,
        data: {
          title: 'privacy-polices'
        }
      },
      {
        path: 'terms-and-condition',
        component: TermsAndConditionComponent,
        data: {
          title: 'terms-and-condition'
        }
      },
     
   
   ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule {}
