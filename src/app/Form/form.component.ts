import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class SecondComponent implements OnInit {
isLoading = false;

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }
  navigateToUserDetails(){
    this.isLoading = true;
    this._router.navigate(['/user-details']);
  }
}
