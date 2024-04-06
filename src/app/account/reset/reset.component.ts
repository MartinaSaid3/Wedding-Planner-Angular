import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from '../../_modules/account';
import { AuthService } from '../../services/auth.service';
import { query } from '@angular/animations';
import { FormControl } from '@angular/forms';
import { first } from 'rxjs';
import ResetPasswordDto from '../../_modules/ResetPasswordDto';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrl: './reset.component.css',
})
export class ResetComponent {
  //flag
  isLoading: boolean = false;
  islogin: boolean = true;
  //forms
  Reset = new FormGroup({
    userName: new FormControl<string>('', [
      Validators.required,
      Validators.pattern(/^[A-z0-9_-]{8,15}$/),
    ]),
    password: new FormControl<string>('', [
      Validators.required,
      Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$/),
    ]),
    confirmPassword: new FormControl<string>('', [
      Validators.required,
      Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$/),
    ]),
  });

  Token: string = '';

  constructor(
    private _active: ActivatedRoute,
    private _Router: Router,
    private _formBuilder: FormBuilder,
    private _authService: AuthService
  ) {}

  ngOnInit() {
    this._active.queryParams.subscribe((params) => {
      this.Token = params['token'];
      console.log(this.Token);
    });
  }

  error: string = '';

  ResetPass() {
    this.isLoading = true;

    const resetPasswordDto: ResetPasswordDto = {
      userName: this.Reset.controls.userName.value ?? '',
      token: this.Token,
      password: this.Reset.controls.password.value ?? '',
      confirmPassword: this.Reset.controls.confirmPassword.value ?? '',
    };

    this._authService.ResetPassword(resetPasswordDto).subscribe({
      next: (response) => {
        this.isLoading = false;
        console.log(response);
        if (response != null) {
          this._Router.navigate(['/account/login']);
        } else {
          this.error = 'This reset Faild :';
        }
      },
      error: (error) => {
        this.isLoading = false;
        console.error(error);
        console.error('This reset Faild', error);
        this.error = 'This reset Faild';
      },
    });
  }
}
