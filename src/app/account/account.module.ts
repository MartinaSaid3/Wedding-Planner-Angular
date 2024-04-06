import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AccountComponent } from './account/account.component';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {CdkStepperModule} from '@angular/cdk/stepper';
import { MatStepperModule } from "@angular/material/stepper";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ResetComponent } from './reset/reset.component';

@NgModule({
  declarations: [
    RegistrationComponent,
    AccountComponent,
    LoginComponent,
    ResetComponent,
  ],
  imports: [
    CommonModule,
    CoreModule ,
    RouterModule ,
    ReactiveFormsModule,
    CdkStepperModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  exports: [AccountComponent],
})
export class AccountModule {
}

