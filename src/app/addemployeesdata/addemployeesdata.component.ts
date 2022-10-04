import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addemployeesdata',
  templateUrl: './addemployeesdata.component.html',
  styleUrls: ['./addemployeesdata.component.css']
})
export class AddemployeesdataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addEmployees(empform : NgForm){
    if(empform.invalid){
      return;
    }
  }
}
