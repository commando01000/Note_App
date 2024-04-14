import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedRoutingModule } from '../shared-routing.module';

@NgModule({
  declarations: [NavBarComponent, FooterComponent],
  imports: [CommonModule, SharedRoutingModule],
  exports: [
    // Make sure to export the components so they can be used outside this module
    NavBarComponent,
    FooterComponent,
  ],
})
export class SharedComponentsModule {}
