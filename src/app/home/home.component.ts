import { Component, OnInit } from '@angular/core';
import { AuthService } from './../_services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userList: any = [];
    
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.userList()
			.subscribe(
			data => {
        console.log(data);
        this.userList = data['data'];
        console.log(this.userList);
			},
			error => {
				var response = error._body;
				console.log('response', error);
			});
  }

}
