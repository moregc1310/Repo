import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employedetails',
  templateUrl: './employedetails.component.html',
  styleUrls: ['./employedetails.component.css']
})
export class EmployedetailsComponent implements OnInit{
   
  selectedEmployeeId:string | any ;
  employeDetails:any;

  constructor(private route:ActivatedRoute,private http:HttpService,private fb:FormBuilder){
   
  }

  ngOnInit(): void {
    this.selectedEmployeeId=this.route.snapshot.paramMap.get("id");
    console.log("selected id " + this.selectedEmployeeId);
   this.getAllEmployeeList();
   //this.updateEmployee();
    
  }


  getAllEmployeeList() {
    this.http.getEmployeeList().subscribe((response: any) => {
      if (this.selectedEmployeeId != null) {
        this.employeDetails = response.data.find((i: { id: number }) => i.id == this.employeDetails)
      }
    })
    this.http.getProjectListById(this.selectedEmployeeId).subscribe((response: any) => {
      this.employeDetails = response.data;
      console.log("response By ID " + response);
      
    })
  };


  // updateEmployee(){
  //   this.http.updateEmployee(this.employeDetails,this.selectedEmployeeId).subscribe((response:any)=>{
  //         console.log("success");
  //   })
  // }

  

 



}
