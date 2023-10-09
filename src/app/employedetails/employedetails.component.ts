import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private route:ActivatedRoute,private http:HttpService,private fb:FormBuilder,private router: Router){
   
  }

  ngOnInit(): void {
    this.selectedEmployeeId=this.route.snapshot.paramMap.get("id");
    console.log("selected id " + this.selectedEmployeeId);
   this.getAllEmployeeList();
   this.updateEmployee();
    
  }


  getAllEmployeeList() {
    this.http.getEmployeeList().subscribe((response: any) => {
      if (this.selectedEmployeeId != null) {
        this.employeDetails = response.data.find((i: { id: number }) => i.id == this.employeDetails)
      }
    })
    this.http.getEmployeeById(this.selectedEmployeeId).subscribe((response: any) => {
      this.employeDetails = response.data;
      console.log("response By ID " + response);
      
    })
  };


  updateEmployee(){
    const reqBody=this.employeDetails;
    const endpoint="update/"+this.selectedEmployeeId
    this.http.putDataToServer(endpoint,reqBody).subscribe((response:any)=>{
          console.log("success",response);
    })
  }

  


  deleteEmployee() {
    const endpoint = 'delete/' + this.selectedEmployeeId;
    this.http.deleteDataFromServer(endpoint).subscribe((response: any) => {
      console.log('Deleted successfully');
     
      this.employeDetails = null;
      this.router.navigate(['/employee']);
    });
  }

 



}
