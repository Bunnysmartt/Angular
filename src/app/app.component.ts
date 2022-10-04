import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  parentData:string='';
  displaychild: string=''
  constructor(){}
  sendData(getdata:string){
    this.parentData = getdata;
    
  }
}
