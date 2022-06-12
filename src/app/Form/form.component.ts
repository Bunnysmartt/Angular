import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class SecondComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }
  GotoSecondComponent(){
    this._router.navigateByUrl('user-details');
  }
}
