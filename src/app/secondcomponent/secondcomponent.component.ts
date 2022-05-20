import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secondcomponent',
  templateUrl: './secondcomponent.component.html',
  styleUrls: ['./secondcomponent.component.css']
})
export class SecondcomponentComponent implements OnInit {

  constructor(private _router : Router) { }
  navigatetoapp: any = '/appcomponent';

  GoToAppComponent(navigatetoapp: any) {
    this._router.navigate([navigatetoapp]);
  }
  
  ngOnInit(): void {
  }

}
