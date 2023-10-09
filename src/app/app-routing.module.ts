import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { EmployedetailsComponent } from './employedetails/employedetails.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';

const routes: Routes = [
  {path:"",redirectTo:"/employee",pathMatch:"full"},
  {path:"employee",component:EmployeeComponent},
  {path:"employee-details/:id",component:EmployedetailsComponent},
  {path:"create-employee",component:CreateEmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
