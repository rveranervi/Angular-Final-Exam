import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import decode from 'jwt-decode';
import { Observable } from 'rxjs';
import { AuthGuardService } from './auth-guard.service';

interface IPayloadToken {
  username: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})

export class RoleGuardService implements CanActivate {

  constructor(
    public auth: AuthGuardService, 
    public router: Router
  ) { }
  

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    // this will be passed from the route config
    // on the data property
    const expectedRole = route.data['expectedRole'];
    const token = localStorage.getItem('token');
    // decode the token to get its payload
    const tokenPayload: IPayloadToken = decode(token!);
    if (!this.auth.isAuthenticated() || tokenPayload.role !== expectedRole) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
