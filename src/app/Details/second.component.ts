import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }
  GotoSecondComponent(){
    this._router.navigateByUrl('first');
  }
}
