import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

const helper = new JwtHelperService();

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }
  
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const token = localStorage.getItem('access_token');
    if (token && !helper.isTokenExpired(token)) { 
      return true;
    }

    this.router.navigate(['login']);
    return false;
  }
}