import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";

@Injectable()
export class PublicAuthGuard implements CanActivate {
	constructor(private _router: Router) {
	}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		let currentUser = localStorage.getItem('currentUser');
		if (currentUser == null) {
			return true;
		} else {
			if(state.url == "/login") {
				this._router.navigate([''], { queryParams: { islogin: 'true'} });
			} else {
				this._router.navigate(['']);
			}
			return false;
		}
	}
}