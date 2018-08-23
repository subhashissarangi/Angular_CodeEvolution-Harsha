import {EmployeeModel} from "../models/employee.model";
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }


  employees: EmployeeModel[] = [
    {
      id: 12345,
      name: "John",
      gender: "Male",
      email: "abc@gmail.com",
      phoneNumber: 9886100271,
      contactPreference: "#9/103 hmt main road",
      dateOfBirth: new Date("12/07/2018"),
      department: "IT APPS",
      isActive: true,
      photoPath: "assets/images/Asian-businesswoman.png"
    },
    {
      id: 12346,
      name: "Nicol",
      gender: "Male",
      email: "xyl@gmail.com",
      phoneNumber: 9988776651,
      contactPreference: "#9/103 USA Residence",
      dateOfBirth: new Date("12/09/2009"),
      department: "Networking",
      isActive: true,
      photoPath: "assets/images/brent_lowman.png"
    },
    {
      id: 12347,
      name: "Silverster",
      gender: "Female",
      email: "anything@gmail.com",
      phoneNumber: 987654310,
      contactPreference: "#Russia ",
      dateOfBirth: new Date("07/04/1989"),
      department: "Manager",
      isActive: true,
      photoPath: "assets/images/girl.png"
    }

  ];
}
