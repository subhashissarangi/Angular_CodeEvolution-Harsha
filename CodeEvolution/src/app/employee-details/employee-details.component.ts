import {EmployeeManagerDetailsService} from '../employee-manager-details.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'employee-details',
  template: `
  <h1>Employee Details</h1>
      <ul *ngFor="let users of userDetails">
     <li>{{users.name}}{{users.age}}</li>
  </ul>
  
`,
  styles: [``]
})
export class EmployeeDetailsComponent implements OnInit {

  public userDetails = [];
  
  constructor(private _userDetailsService: EmployeeManagerDetailsService) {}

  ngOnInit() {
     this._userDetailsService.getUserDetails().subscribe(data=>this.userDetails=data);
  }

}
