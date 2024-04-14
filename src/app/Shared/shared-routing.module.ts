import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from '../Modules/authentication/sign-in/sign-in.component';
import { SignUpComponent } from '../Modules/authentication/sign-up/sign-up.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full',
  },
  {
    path: 'authentication/sign-in',
    component: SignInComponent,
  },
  {
    path: 'authentication/sign-up',
    component: SignUpComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharedRoutingModule {}
