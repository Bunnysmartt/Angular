import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  firstname : string = "Ravi";
  lastname  : string = "Kotipalli";
  isadded : boolean = true;
  price : number | string = "100";
  sample : any = true
  students : string[] = ["Ravi", "Kiran", "Prakash", "Sirisha"];
  studentsobj : any ={
    "id" :12,
    "Firstname" :"Kiran",
    "Lastname" : "Balumuri",
    "Email" : "kb@gmail.com"
  }
  studentsnestedobj : any ={
    "id" :12,
    "Firstname" :"Kiran",
    "Lastname" : "Balumuri",
    "Email" : "kb@gmail.com",
    "address":{
      "City": "Hyderabad",
      "State" : "Telangana",
      "Country" : "India"
    },
    "Technicalskills": [".Net FullStackDeveloper","FrontEndDeveloper"]
  }
  constructor() { }

  ngOnInit(): void {
  }

}
