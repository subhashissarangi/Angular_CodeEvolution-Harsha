import { EmployeeDetails } from "../interfaces/employeedetails";
import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url = "/assets/datas/employee-details.json"
  constructor(private http: HttpClient) { }
  
   getUserDetails(): Observable<EmployeeDetails[]> {
     return this.http.get<EmployeeDetails[]>(this._url);
  }
}
