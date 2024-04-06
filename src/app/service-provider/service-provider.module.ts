import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestsComponent } from './requests/requests.component';
import { DetailsComponent } from './details/DetailsComponent';
import { DoublePipe } from '../double.pipe';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddHallComponent } from './add-hall/add-hall.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { HallsComponent } from './halls/halls.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CoreModule } from '../core/core.module';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ReservationRequestsComponent } from './reservation-requests/reservation-requests.component';
import { ReservationComponent } from './reservation/reservation.component';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [
    RequestsComponent,
    DetailsComponent,
    DoublePipe,
    SearchComponent,
    SidebarComponent,
    DashboardComponent,
    AddHallComponent,
    HallsComponent,
    ReservationRequestsComponent,
    ReservationComponent,
    UpdateComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CoreModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule
  ],
  exports:[RequestsComponent,DetailsComponent],
})

export class ServiceProviderModule { }
