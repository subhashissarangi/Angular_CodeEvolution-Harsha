import {UserDetailsInterface} from './userdetailsinterface';
import { HttpRequest,HttpHandler,HttpEvent,HttpInterceptor,HttpErrorResponse} from "@angular/common/http";
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Router} from "@angular/router";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable({
  providedIn: 'root'
})
export class EmployeeManagerDetailsService {

  private _url = "/assets/data/user-details.json"

  constructor(private http: HttpClient) {

    //this.http.request(errorHandler, _url, options).pipe(map(res => res),catchError((err: HttpErrorResponse),
    // catchError((error: HttpErrorResponse) => {
    // }
  }

  getUserDetails(): Observable<UserDetailsInterface[]> {
    return this.http.get<UserDetailsInterface[]>(this._url);
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Server Error");
  }
}