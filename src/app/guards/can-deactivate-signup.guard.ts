import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanSignupComponentDeactivate{
    canDeactivate:() => Observable <boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;
}

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateSignupGuard implements CanDeactivate<CanSignupComponentDeactivate> {

  canDeactivate(component: CanSignupComponentDeactivate,
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
                nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      return component.canDeactivate?component.canDeactivate():true;
  }


}
