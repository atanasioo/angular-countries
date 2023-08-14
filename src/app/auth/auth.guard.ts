import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}
  canActivate(): boolean {
    let isLoggedin = this.auth.isAuthenticated();
    if (isLoggedin) {
      return true;
    }
    else {
      this.router.navigate(['/login']);
      return false
    }
  }
}
