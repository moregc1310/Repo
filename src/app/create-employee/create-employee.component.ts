import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit{
  employeeForm!:FormGroup;
  toast: any;
  
  constructor(private route:ActivatedRoute,private http:HttpService, private fb:FormBuilder,private toastr: ToastrService){}
  ngOnInit(): void {
    this.createForm();
   
  }

  createForm(){
    this.employeeForm=this.fb.group({
    "name":[''],
    "salary":[''],
    "age":[''],
    "id":['']
    })
  }

  submit(){
    console.log(this.employeeForm.value);
    const reqBody=this.employeeForm.value;
    this.http.postDataToServer("create",reqBody).subscribe((data:any)=>{
      if (data.status_code == "200") {
        this.toastr.success('Employee Created Successfully', 'Employee Created Successfully');
        //this.toast.success({ detail: "SUCCESS", summary: 'employee Create Successfully', duration: 5000, position: 'topRight' });
      }
      
      console.log("success");
    },
    (error:any)=>{
      this.toastr.success('Employee Not Created', 'Employee Not Created');
      //this.toast.error({ detail: "Error! please try again!", summary: 'error', duration: 5000, position: 'topRight' });
    })
  }



}
