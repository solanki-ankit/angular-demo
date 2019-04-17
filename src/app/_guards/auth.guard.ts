import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
// import { CookieService } from '../_services/cookie.service';

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private _router: Router) {
	}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		
		let currentUser = localStorage.getItem('currentUser');
		if (currentUser !== null) {
			return true;
		} else {
			localStorage.removeItem('currentUser');
			this._router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
			return false;
		}
	}
}