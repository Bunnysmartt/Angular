import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicpipes',
  templateUrl: './basicpipes.component.html',
  styleUrls: ['./basicpipes.component.css']
})
export class BasicpipesComponent implements OnInit {

  firstname : string = "ravi";
  lastname : string = "KOTIPALLI";
  samplemsg : string = " This is my angular learning";
  dateobj = new Date();
  total : number = 6.8;
  newtotal : number = 5.646568789161;
  price : number = 100;
  constructor() { }

  ngOnInit(): void {
  }

}
