import { Injectable } from '@angular/core';
import { Router, CanLoad, Route, UrlSegment, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserServiceService } from '../services/user-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private userService:UserServiceService,
                private route:Router){    }


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if(!this.userService.isAuthenticated){
            this.route.navigate(['login']);
        }
        console.log(this.userService.isAuthenticated);
        return this.userService.isAuthenticated;
      }
    }
