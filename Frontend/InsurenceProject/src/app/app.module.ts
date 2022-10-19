import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';

import { AdminComponent } from './admin/admin.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PoliciesComponent } from './policies/policies.component';
import { UserComponent } from './user/user.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

import { HeaderComponent } from './header/header.component';
import { QueriesComponent } from './queries/queries.component';
import { ApplyComponent } from './apply/apply.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AddpoliciesComponent } from './addpolicies/addpolicies.component';
import { ViewpoliciesComponent } from './viewpolicies/viewpolicies.component';
import { CustomersComponent } from './customers/customers.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { PersonaldetailsComponent } from './personaldetails/personaldetails.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserheaderComponent } from './userheader/userheader.component';
import { UpdateproficeComponent } from './updateprofice/updateprofice.component';
import { HistoryComponent } from './history/history.component';
import { ApprovalsComponent } from './approvals/approvals.component';
import { CustomerhistoryComponent } from './customerhistory/customerhistory.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { UpdatepoliciesComponent } from './updatepolicies/updatepolicies.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { UserhistoryComponent } from './userhistory/userhistory.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    AboutusComponent,
    LoginComponent,
    
    AdminComponent,
    ContactusComponent,
    PoliciesComponent,
    UserComponent,
    ChangePasswordComponent,
  
    HeaderComponent,
    QueriesComponent,
    ApplyComponent,
    AdminhomeComponent,
    AddpoliciesComponent,
    ViewpoliciesComponent,
    CustomersComponent,
    AdminheaderComponent,
    PersonaldetailsComponent,
    UserheaderComponent,
    UpdateproficeComponent,
    HistoryComponent,
    ApprovalsComponent,
    CustomerhistoryComponent,
    CategoryListComponent,
    CreateCategoryComponent,
    UpdatepoliciesComponent,
    UpdateCategoryComponent,
    UserhistoryComponent,
    FooterComponent,
    ContactComponent,
   
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
