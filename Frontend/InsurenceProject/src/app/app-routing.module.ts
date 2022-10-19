import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddpoliciesComponent } from './addpolicies/addpolicies.component';
import { AdminComponent } from './admin/admin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { ApplyComponent } from './apply/apply.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CustomerhistoryComponent } from './customerhistory/customerhistory.component';
import { CustomersComponent } from './customers/customers.component';
import { HistoryComponent } from './history/history.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PersonaldetailsComponent } from './personaldetails/personaldetails.component';
import { PoliciesComponent } from './policies/policies.component';
import { QueriesComponent } from './queries/queries.component';
import { RegisterComponent } from './register/register.component';
import { UpdateproficeComponent } from './updateprofice/updateprofice.component';
import { UserComponent } from './user/user.component';
import { ViewpoliciesComponent } from './viewpolicies/viewpolicies.component';
import{CategoryListComponent}from './category-list/category-list.component';
import{CreateCategoryComponent}from './create-category/create-category.component';
import{UpdatepoliciesComponent}from './updatepolicies/updatepolicies.component';
import { UserhistoryComponent } from './userhistory/userhistory.component';
import { ContactComponent } from './contact/contact.component';







const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:'home',component:HomeComponent},
  {path:'adminhome',component:AdminhomeComponent},
  {path:"customers",component:CustomersComponent},
  {path:"addpolicies",component:AddpoliciesComponent},
  {path:"viewpolicies",component:ViewpoliciesComponent},
  {path:'about',component:AboutusComponent},
  {path:'customerhistory',component:CustomerhistoryComponent},
  {path:'register',component:RegisterComponent},
  {path:'contact',component:ContactusComponent},
  {path:'admin',component:AdminComponent},
  {path:'policy',component:PoliciesComponent},
  {path:'history',component:HistoryComponent},
  {path:'login',component:LoginComponent},
  { path:'update', component:UpdateproficeComponent},
  {path:'categories',component:CategoryListComponent},
  {path:'addCategory',component:CreateCategoryComponent},
  {path:'updatepolicy/:policyId', component:UpdatepoliciesComponent},
  {path:'query',component:QueriesComponent},
  {path: 'userhistory',component:UserhistoryComponent},
  {path:'contactus',component:ContactComponent},
  
  {path:'user',component:UserComponent,

  
  
  children:[
  {path:'changePassword',component:ChangePasswordComponent},
 

  {path:'query',component:QueriesComponent},
  {path:'policie',component:ApplyComponent},
  {path:'personal',component:PersonaldetailsComponent}
  
]},

 

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
