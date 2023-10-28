import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormBuilder, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { SalesComponent } from './sales/sales.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { PageheaderComponent } from './layout/pageheader/pageheader.component';
import { MenuitemComponent } from './layout/menuitem/menuitem.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule, } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, Routes } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { FooterComponent } from './layout/footer/footer.component';
//import { FormComponent } from './form/form.component';
import { ButtonComponent } from './components/button/button.component';
import { LoginComponent } from './login/login.component';
//import { ViewComponent } from './admin/category/view/view.component';



const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    redirectTo: 'login'
    //redirectTo: 'dashboard/category/view'
   
  },
  {
    path: 'login',    
    component:LoginComponent
  },
  {
    path: 'dashboard',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'sales',
        component: SalesComponent
      },
      {
        path: 'dashboard',
        //loadChildren:() => import('./form/form/form.module').then(m=>m.FormModule)
        loadChildren: async () => (await import('./form/form/form.module')).FormModule,
        //component: FormComponent
      },
      {
        path: 'category',
        //loadChildren:() => import('./form/form/form.module').then(m=>m.FormModule)
        loadChildren: async () => (await import('./admin/category/category.module')).CategoryModule,
        //component: FormComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SalesComponent,
    LayoutComponent,
    HeaderComponent,
    //PageheaderComponent,
    MenuitemComponent,
    FooterComponent,
    //FormComponent,
    ButtonComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule,MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    RouterModule.forRoot(routes),
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatMenuModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule
    //MatIconModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
