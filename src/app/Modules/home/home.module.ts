import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { SharedComponentsModule } from 'src/app/Shared/shared-components/shared-components.module';
import { HomeLayoutComponent } from './home-layout/home-layout.component';


@NgModule({
  declarations: [
    HomePageComponent,
    HomeLayoutComponent
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
