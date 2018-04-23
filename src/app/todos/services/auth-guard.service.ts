import { Injectable } from "@angular/core";
import { Router, CanActivate } from '@angular/router';

const fakeService = {
	isAuthenticated: function() {
	  return true;
	}
};

@Injectable()
export class AuthGuardService implements CanActivate {
	canActivate(): boolean {
		// Call some service to make sure the user is authenciated.
		if (!fakeService.isAuthenticated()) {
			this._router.navigate(['login']);
			return false;
		}
		return true;
	}

	constructor(private _router: Router) {}
}
