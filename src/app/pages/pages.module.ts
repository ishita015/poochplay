import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule ,Validators, FormControl } from '@angular/forms';
import { P404Component } from './404-component/404.component';
import { P500Component } from './500-component/500.component';
import { LoginComponent } from './login-component/login.component';
import { RegisterComponent } from './register-component/register.component';
import { CommonModule } from '@angular/common'
import { PagesRoutingModule } from './pages-routing.module';
import { HttpClientModule } from '@angular/common/http';

// import { CookieService } from 'ngx-cookie-service';
@NgModule({
  imports: [ PagesRoutingModule , FormsModule, ReactiveFormsModule,CommonModule, HttpClientModule ],
  declarations: [
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent
  ]
})
export class PagesModule { }
