import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from '@angular/router';
import { LogoComponent } from './logo/logo.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    LogoComponent,
  ],
  imports: [
    CommonModule,RouterModule,MatIconModule
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    LogoComponent
  ]
})
export class CoreModule { }
