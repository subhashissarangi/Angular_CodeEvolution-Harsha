import {EmployeeModel} from "../models/employee.model";
import {EmployeeService} from "../services/employee.service";
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  public employeeDetails = [];


  constructor(private _employeeDetailsService: EmployeeService) {}

  ngOnInit() {
    this._employeeDetailsService.getUserDetails().subscribe(data => this.employeeDetails = data);
  }


}
