import { Injectable } from '@angular/core';
import { Router, CanLoad, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { UserServiceService } from '../services/user-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
    constructor(private userService:UserServiceService,
                private route:Router){    }

  canLoad(
    route:Route, segments:UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean  {

    if(!this.userService.isAuthenticated){
        this.route.navigate(['login']);
    }
    return this.userService.isAuthenticated;
  }

}
