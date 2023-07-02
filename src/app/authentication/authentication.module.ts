import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageModule } from './login/login.module';
import { SharedModule } from '../shared/shared.module';
import { RegisterPageModule } from './register/register.module';
@NgModule({
  declarations: [],
  imports: [CommonModule, LoginPageModule, RegisterPageModule, SharedModule],
})
export class AuthenticationModule {}
