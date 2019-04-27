import { Injectable } from '@angular/core';
// import { Http, Headers, RequestOptions, Response } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpRequest, HttpParams } from '@angular/common/http';
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

  formUpload(formData) {
    const headers = new HttpHeaders();
//this is the important step. You need to set content type as null
  headers.set('Content-Type', null);
  headers.set('Accept', "multipart/form-data");
  const params = new HttpParams();
// const headerDict = {
//   'Content-Type': 'application/json',
//   'Accept': 'application/json',
//   'Access-Control-Allow-Headers': 'Content-Type',
// }
    // console.log(data);
    // const formData1 = new FormData();
    // formData.append('email', data.email);
    // formData.append('image', data.avatar[0],'aaa.jpg');
    return this.http.post('http://localhost/ang.php', formData, { headers: headers });
  }
}
