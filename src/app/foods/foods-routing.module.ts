import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllFoodsComponent} from './../foods/all-foods/all-foods.component';
import { AddFoodsComponent } from './../foods/add-foods/add-foods.component';
import { AddFoodProductComponent } from './../foods/addfoodproduct/add-food-product.component';
import { ListFoodCompanyComponent } from './../foods/list-food-company/list-food-company.component'
import { ListFoodProductComponent } from './../foods/list-food-product/list-food-product.component'
import { UpdateFoodCompanyComponent } from './../foods/update-food-company/update-food-company.component';
import { UpdateFoodProductComponent } from './../foods/update-food-product/update-food-product.component';

const routes: Routes = [
  
  {
    path: '',
    data: {
      title: 'foods'
    },
    children: [
           
      {
        path: 'all-foods',
        component: AllFoodsComponent,
        data: {
          title: 'all-foods'
        }
      },
      {
        path: 'add-foods',
        component: AddFoodsComponent,
        data: {
          title: 'add-foods'
        }
      },
      {
        path: 'add-food-product',
        component: AddFoodProductComponent,
        data: {
          title: 'add-food-product'
        }
      },
      {
        path: 'list-food-company',
        component: ListFoodCompanyComponent,
        data: {
          title: 'list-food-company'
        }
      },
      {
        path: 'list-food-company',
        component: ListFoodCompanyComponent,
        data: {
          title: 'list-food-company'
        }
      },
      {
        path: 'list-food-company/:company_id',
        component: UpdateFoodCompanyComponent,
        data: {
          title: 'update-food-company'
        }
      },
      {
        path: 'list-food-product',
        component: ListFoodProductComponent,
        data: {
          title: 'list-food-product'
        }
      },
      {
        path: 'list-food-product/:product_id',
        component: UpdateFoodProductComponent,
        data: {
          title: 'update-food-product'
        }
      },
      {
        path: 'update-food-company',
        component: UpdateFoodCompanyComponent,
        data: {
          title: 'update-food-company'
        }
      },
      {
        path: 'update-food-product',
        component: UpdateFoodProductComponent,
        data: {
          title: 'update-food-product'
        }
      },



     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodsRoutingModule {}
