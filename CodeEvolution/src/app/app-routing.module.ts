import {EmployeeDetailsComponent} from "./employee-details/employee-details.component";
import {ErrorPageComponent} from './error-page/error-page.component';
import {ManagerDetailsComponent} from "./manager-details/manager-details.component";
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [

  {path: '', component: EmployeeDetailsComponent},
  {path: 'employee', component: EmployeeDetailsComponent},
  {path: 'manager', component: ManagerDetailsComponent},
  {path: '**', component: ErrorPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const RoutingComponents = [EmployeeDetailsComponent, ManagerDetailsComponent, ErrorPageComponent]
