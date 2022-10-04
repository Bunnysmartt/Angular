import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { EventEmitter } from 'stream';

@Component({
  selector: 'app-basicinputoutputdecorators',
  templateUrl: './basicinputoutputdecorators.component.html',
  styleUrls: ['./basicinputoutputdecorators.component.css']
})
export class BasicinputoutputdecoratorsComponent implements OnInit {
@Input() Data:string='';
@Output() Childdata = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  
  sendChilddata(getchilddata:string){

    this.Childdata.emit(getchilddata);

  }

}
