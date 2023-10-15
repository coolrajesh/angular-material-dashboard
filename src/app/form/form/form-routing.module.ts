import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { FormComponent } from '../form.component';

const fileRoutes: Routes = [

    {
        path:'',
        children:[
          {
             path:'form',
             component:FormComponent
          }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(fileRoutes)],
  exports: [RouterModule]
})



export class FormRoutingModule { }
