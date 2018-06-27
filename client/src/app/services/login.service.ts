import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../fbl-login/fbl-login.interface';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) { }

  post (login: Login): Observable<Login> {
    return this.http.post<Login>('localhost:5001', login, httpOptions)
  }
}