import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondcomponentComponent } from './secondcomponent/secondcomponent.component';

const routes: Routes = [{path:'secondcomponent', component: SecondcomponentComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
