import {EmployeeManagerDetailsService} from '../employee-manager-details.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'manager-details',
  template:` 
  <h1>Manager Details</h1>
  <ul *ngFor="let users of userDetails">
     <li>{{users.name }}{{users.age }}{{users.car }}</li>
  </ul>
`,
  styles: [``]
})
export class ManagerDetailsComponent implements OnInit {

  public userDetails = [];
  constructor(private _userDetailsService: EmployeeManagerDetailsService) {}

  ngOnInit() {
    this._userDetailsService.getUserDetails().subscribe(data=>this.userDetails=data);
  }

}
