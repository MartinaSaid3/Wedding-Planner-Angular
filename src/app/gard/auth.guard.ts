// import { CanActivateFn } from '@angular/router';

// export const authGuard: CanActivateFn = (route, state) => {
//   const router = state.root.router;
//   if(localStorage.getItem('userToken') != null){
//     return true;
//   }else{
//     router.navigateByUrl('/account/login');
//     return false;
//   }
// }

import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(localStorage.getItem('userToken') !== null) {
      return true;
    } else {
      this.router.navigateByUrl('/account/login');
      return false;
    }
  }
}

