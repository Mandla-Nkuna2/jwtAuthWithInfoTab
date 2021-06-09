import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authServ: AuthService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.authServ.user.pipe(
      take(1),
      map((user) => {
        console.log('in canActivate ', user);
        if (!user) {
          this.alertCtrl
            .create({
              header: 'Unauthorized',
              message: 'Not allowed to access this page',
              buttons: ['OK'],
            })
            .then((alert) => alert.present());
          this.router.navigateByUrl('/');
          return false;
        } else {
          return true;
        }
      })
    );
  }
}
