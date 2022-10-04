import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employeesdata',
  templateUrl: './employeesdata.component.html',
  styleUrls: ['./employeesdata.component.css']
})
export class EmployeesdataComponent implements OnInit {
  displayemployeedata: any = [];
  constructor(private http: HttpClient, private employeedata: EmployeesService) { }

  ngOnInit() {
    this.getEmployeedata();
  }

  getEmployeedata() {
    this.employeedata.getEmployees().subscribe((res) => {
      this.displayemployeedata = res;
    });
  }
}
