import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';
import { Account } from '../_modules/account';
import { User } from '../_modules/user';
import ResetPasswordDto from '../_modules/ResetPasswordDto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _HTTpClient: HttpClient, private _router: Router) {
    if (localStorage.getItem('userToken') != null) {
      this.saveUserData();
    }
  }

  decodedToken: any;
  userData: any = new BehaviorSubject(null);
  //decodedToken?:object;
  saveUserData() {
    let encodedToken = JSON.stringify(localStorage.getItem('userToken'));
    this.decodedToken = jwtDecode(encodedToken);
    this.userData.next(this.decodedToken);
    console.log(this.userData);
  }

  signup(signData: User): Observable<any> {
    return this._HTTpClient.post<User>(
      'http://localhost:5291/api/Account/register',
      signData
    );
  }

  login(loginData: Account): Observable<any> {
    return this._HTTpClient.post<Account>(
      'http://localhost:5291/api/Account/Login',
      loginData
    );
  }

  logout() {
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this._router.navigate(['/account/login']);
  }

  forgetPassword(accountData: Account) {
    return this._HTTpClient.post<Account>(
      'http://localhost:5291/api/Account/ForgetPassword',
      accountData
    );
  }

  ResetPassword(ResetData: ResetPasswordDto) {
    return this._HTTpClient.post<object>(
      'http://localhost:5291/api/Account/ForgetPassword',
      ResetData
    );
  }
}
