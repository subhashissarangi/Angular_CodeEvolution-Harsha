import {UserDetailsInterface} from './userdetailsinterface';
import {HttpErrorResponse} from "@angular/common/http";
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/observable/throw';


@Injectable({
  providedIn: 'root'
})
export class EmployeeManagerDetailsService {

  private _url = "/assets/data/user-details.json"
  constructor(private http: HttpClient) {}

  getUserDetails(): Observable<UserDetailsInterface[]> {
    return this.http.get<UserDetailsInterface[]>(this._url);
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Server Error");
  }
}