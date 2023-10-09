import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{
  employeeList:any[]=[];


  constructor(private http:HttpService){}
  ngOnInit(): void {
    this.getAllEmployeeList();
   
  }

  

  getAllEmployeeList() {
    this.http.getEmployeeList().subscribe((response: any) => {
      this.employeeList = response.data;
    })
  }


}
