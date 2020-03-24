import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService1 } from '../services/auth.service';
import { Auth0Service } from '../services/auth0.service';
import { tap } from 'rxjs/operators';
import { AuthService } from 'angularx-social-login';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  googleAuthenticated: boolean;
  user: any;
  loggedIn: boolean;

  constructor(private auth: AuthService1, private route: Router, private auth0: Auth0Service, private authService: AuthService ) {}
  canActivate() {
      if ( this.auth.isloggedin() ) {
        return true;
      } else {
        this.route.navigateByUrl('/login');
        return false;
      }
      // return this.auth0.isAuthenticated$;
      // return this.dashboardGuard();
    }

  canActivateChild(): Observable<boolean>|Promise<boolean>|boolean {
      if ( this.auth.isloggedin() ) {
        return true;
      } else {
        this.route.navigateByUrl('/login');
        return false;
      }
      // return this.auth0.isAuthenticated$;
      // return this.dashboardGuard();
    }

  dashboardGuard(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.authService.authState.subscribe(user => {
        this.user = user;
        this.googleAuthenticated = (this.user != null);
        if (this.googleAuthenticated) {
          // this.route.navigateByUrl('/main/marvel');
          resolve(true);
        } else {
          this.route.navigateByUrl('/login');
          resolve(false);
        }
      });
    });
  }

}

