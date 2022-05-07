import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  constructor(private http: HttpClient) { }
  baseURL: string = "http://localhost:3001/";
  getUserList(): Observable<any> {
    const url = this.baseURL;
    return this.http.get(url+"getuser");
  }
  addUser(user:User): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(user);
    console.log(body)
    return this.http.post(this.baseURL + 'adduser', body,{'headers':headers})
  }
}
