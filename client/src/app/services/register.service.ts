import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from '../fbl-register/fbl-register.interface';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable()
export class RegisterService {
  constructor(private http: HttpClient) { }

  post (register: Register): Observable<Register> {
    return this.http.post<Register>('http://localhost:5001/api/user/create', register, httpOptions);
  }
}
