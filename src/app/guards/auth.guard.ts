import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Auth0Service } from '../services/auth0.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private route: Router, private auth0: Auth0Service ) {}
  canActivate() {
      /*if ( this.auth.isloggedin() ) {
        return true;
      } else {
        this.route.navigateByUrl('/login');
        return false;
      }*/
      return this.auth0.isAuthenticated$;

  }

}
