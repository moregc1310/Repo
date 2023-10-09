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
   //this.getEmployess();
  }

  // getEmployess(){
  //   this.http.getDataFromServer("employees").subscribe((el:any)=>{
  //      console.log(el.data);
  //       this.employeeList=el.data;

  //   },
  //   error=>{
  //     console.log('There was an error!' + error);
  //   })
  // }


  getAllEmployeeList() {
    this.http.getEmployeeList().subscribe((response: any) => {
      this.employeeList = response.data;
    })
  }


}
