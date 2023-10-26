import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ViewComponent } from '../category/view/view.component';

const fileRoutes: Routes = [

    {
        path:'',
        children:[
          {
             path:'view',
             component:ViewComponent
          }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(fileRoutes)],
  exports: [RouterModule]
})



export class CategoryRoutingModule { }
