import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { UsersDataComponent } from './users-data/users-data.component';
import { ServiceProviderDataComponent } from './service-provider-data/service-provider-data.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { CoreModule } from '../core/core.module';
import { MatIconModule } from '@angular/material/icon';
import { AdminRequestsComponent } from './admin-requests/admin-requests.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    SideBarComponent,
    UsersDataComponent,
    ServiceProviderDataComponent,
    AdminRequestsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
    MatCardModule,
    CoreModule,
    MatIconModule
  ]
})
export class AdminModule { }
