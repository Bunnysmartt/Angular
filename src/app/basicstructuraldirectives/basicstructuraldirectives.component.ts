import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicstructuraldirectives',
  templateUrl: './basicstructuraldirectives.component.html',
  styleUrls: ['./basicstructuraldirectives.component.css']
})
export class BasicstructuraldirectivesComponent implements OnInit {

  isadded : boolean= true;
  successmessage : string= "Hiiii";
  displaymessage : boolean = true;
  myname:string = "Bunny";
  myobj:any =[
    {
      "id":12,
      "name":"ravi",
      "description":"software",
      "gender":"Male"

    },

    {
      "id":13,
      "name":"siddhu",
      "description":"engineer",
      "gender":"Male"

    },
    {
      "id":14,
      "name":"prakash",
      "description":"engineer",
      "gender":"Male"

    },
    {
      "id":15,
      "name":"kiran",
      "description":"engineer",
      "gender":"Male"

    },
    {
      "id":16,
      "name":"siri",
      "description":"engineer",
      "gender":"Female"

    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

  OnChange() 
  {
    this.displaymessage = !this.displaymessage
  }

}
