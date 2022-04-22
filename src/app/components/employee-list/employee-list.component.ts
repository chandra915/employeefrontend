import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from './../../services/employee-service.service';
import { Employee } from './../../model/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeService:EmployeeServiceService) { }
  employess?:Employee[];
  ngOnInit(): void {

    this.employeeService.listEmployees().subscribe(data=>{
      this.employess=data;
    });
  }

}
