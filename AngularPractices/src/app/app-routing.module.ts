import {CreateEmployeeComponent} from "./employees/create-employee.component";
import {EmployeeDetailsComponent} from "./employees/employee-details.component";
import { ListEmployeeComponent } from "./employees/list-employee.component";
import {PageNotFoundComponent} from "./error-pages/page-not-found.component";
import {NgModule} from '@angular/core';
import {Routes, RouterModule, Route} from '@angular/router';

const routes: Routes = [
  {path: "employee", component: EmployeeDetailsComponent},
  {path: "createemployee", component: CreateEmployeeComponent},
  {path: '' , redirectTo : "/employee", pathMatch:"full"},
  {path: "**", component: PageNotFoundComponent, pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const RoutingModuleComponents = [EmployeeDetailsComponent, CreateEmployeeComponent]