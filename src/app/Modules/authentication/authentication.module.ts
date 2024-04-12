import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationLayoutComponent } from './authentication-layout/authentication-layout.component';
import { SharedComponentsModule } from 'src/app/Shared/shared-components/shared-components.module';


@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    AuthenticationLayoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedComponentsModule,
    ReactiveFormsModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
