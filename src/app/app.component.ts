import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
<<<<<<< HEAD
  constructor(){}
}
=======
  constructor(private _router: Router) { }
  navigatetosecond: any = '/secondcomponent';

  GotoSecondComponent(navigatetosecond: any) {
    this._router.navigate([navigatetosecond]);
  }
}
>>>>>>> 5ece6559e29405430095904678cab95de41223d0
