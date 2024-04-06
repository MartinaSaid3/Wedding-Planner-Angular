import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { GallaryComponent } from './gallary/gallary.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { HeaderComponent } from './header/header.component';

import { CoreModule } from '../core/core.module';
import { HomeBodyComponent } from './home-body/home-body.component';
import { AccountModule } from '../account/account.module';
import { HallDetailsComponent } from './hall-details/hall-details.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';

import { GoogleMapsModule } from '@angular/google-maps';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';

// import { HTTP_INTERCEPTORS } from '@angular/common/http';
// import { httperrorInterceptor } from '../httperror.interceptor';

@NgModule({
  declarations: [
    HomeComponent,
    AboutusComponent,
    GallaryComponent,
    OurTeamComponent,
    HeaderComponent,
    HomeBodyComponent,
    HallDetailsComponent,
    ReservationFormComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule,
    AccountModule,
    GoogleMapsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
  ],
  exports: [HomeComponent],
  // providers:[{provide : HTTP_INTERCEPTORS,useClass: httperrorInterceptor}]
})
export class ClientModule {}
