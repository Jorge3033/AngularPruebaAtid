import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';



@NgModule({
  declarations: [
    LoginFormComponent,
    LoginPageComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
