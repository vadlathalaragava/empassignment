import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';
@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { }
  student=[];
  ngOnInit() {
    this.student = this.employeeService.employees;
    
  }

}
