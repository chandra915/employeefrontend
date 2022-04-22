import { Component, OnInit } from '@angular/core';
import { Employee } from './../../model/employee';
import { EmployeeServiceService } from './../../services/employee-service.service';


@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  constructor(private empployeeService:EmployeeServiceService) { }
  emp?:Employee;
  ngOnInit(): void {
  }
  addEmployee(data:Employee){
      console.log(data);
      this.empployeeService.addEmployee(data).subscribe(op=>{
        console.log(op);
          this.emp=op;
      });
  }

}
