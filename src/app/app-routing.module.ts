import { ResetComponent } from './account/reset/reset.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account/account.component';
import { HomeComponent } from './client/home/home.component';
import { RegistrationComponent } from './account/registration/registration.component';
import { LoginComponent } from './account/login/login.component';
import { ErrorComponent } from './error/error.component';
import { HomeBodyComponent } from './client/home-body/home-body.component';
import { DashboardComponent } from './service-provider/dashboard/dashboard.component';
import { AddHallComponent } from './service-provider/add-hall/add-hall.component';
import { DetailsComponent } from './service-provider/details/DetailsComponent';

import { HallDetailsComponent } from './client/hall-details/hall-details.component';
import { ReservationFormComponent } from './client/reservation-form/reservation-form.component';
import { AuthGuard } from './gard/auth.guard';

import { HallsComponent } from './service-provider/halls/halls.component';
import { UsersDataComponent } from './admin/users-data/users-data.component';
import { ServiceProviderDataComponent } from './admin/service-provider-data/service-provider-data.component';
import { RequestsComponent } from './service-provider/requests/requests.component';
import { AdminRequestsComponent } from './admin/admin-requests/admin-requests.component';
import { ReservationComponent } from './service-provider/reservation/reservation.component';
import { ReservationRequestsComponent } from './service-provider/reservation-requests/reservation-requests.component';
import { UpdateComponent } from './service-provider/update/update.component';

const routes: Routes = [
  {
    path: 'account',
    component: AccountComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'login', component: LoginComponent },
      { path: 'registration', component: RegistrationComponent },
      { path: 'reset', component: ResetComponent },
    ],
  },

  {
    path: 'home',
    component: HomeComponent,
    children: [{ path: '', component: HomeBodyComponent }],
  },

  { path: 'home/Details/:id', component: HallDetailsComponent },

  {
    path: 'client/Reservation/:id',
    canActivate: [AuthGuard],
    component: ReservationFormComponent,
  },

  {
    path: 'service_provider',
    component: DashboardComponent,
    children: [
      { path: '', component: AddHallComponent },
      { path: 'Halls', component: AddHallComponent },
      { path: 'update', component: UpdateComponent },
      { path: 'requests', component: ReservationRequestsComponent },
      { path: 'reservation', component: ReservationComponent },
    ],
  },

  {
    path: 'admin',
    component: AdminDashboardComponent,
    children: [
      { path: '', component: UsersDataComponent },
      { path: 'users', component: UsersDataComponent },
      { path: 'service_provider', component: ServiceProviderDataComponent },
      { path: 'requests', component: AdminRequestsComponent },
    ],
  },

  { path: 'service_provider/Halls/add_Hall', component: HallsComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
