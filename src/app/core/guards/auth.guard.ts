import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGard implements CanActivate {
  constructor(auth: AuthService, router: Router ) {

}
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
  if (this.auth.) {

  }
}


}
