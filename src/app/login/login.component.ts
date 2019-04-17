import { Component, OnInit } from '@angular/core';
import { AuthService } from './../_services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    console.log(this.model);
    this.auth.login(this.model)
			.subscribe(
			data => {
        console.log(data);
        localStorage.setItem('currentUser', 'test');
				// localStorage.setItem('currentUser', JSON.stringify(data));
				// this.showAlert('alerTLoginin');
				// this._cookieService.set('heartautocare','subscriptionplan',1);
				// this._alertService.success(data.result.message, true);
				// this.model = {};
				// this._loaderService.display(false);
				this.router.navigate([""]);
			},
			error => {
        var response = error._body;
        localStorage.setItem('currentUser', 'test');
        console.log('response', error);
        this.router.navigate([""]);
				// var obj = JSON.parse(response);
				// this.showAlert('alerTLoginin');
				// if (obj.result.error) {
				// 	this._alertService.errorObj(obj.result.error);
				// } else {
				// 	this._alertService.error(obj.result.message);
				// }
				// this._loaderService.display(false);
			});
  }
}
