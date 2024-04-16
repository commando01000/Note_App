import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { SharedComponentsModule } from 'src/app/Shared/shared-components/shared-components.module';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from 'src/app/Pipes/search.pipe';
@NgModule({
  declarations: [HomePageComponent, HomeLayoutComponent, SearchPipe],
  imports: [
    CommonModule,
    SharedComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule,
  ],
})
export class HomeModule {}
