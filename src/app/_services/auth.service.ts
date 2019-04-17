import { Injectable } from '@angular/core';
// import { Http, Headers, RequestOptions, Response } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

// import * as myGlobals from '../globals';
// import { concat } from 'rxjs/operators/concat';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(data) {
    // return this.http.post(environment.APIURL + 'v1/login', JSON.stringify(data)).map((response: Response) => response.json());
    return this.http.post(environment.APIURL + 'api/register', JSON.stringify(data));
  }

  userList() {
    // return this.http.post(environment.APIURL + 'v1/login', JSON.stringify(data)).map((response: Response) => response.json());
    return this.http.get(environment.APIURL + 'api/users');
  }
}
