import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './About/first.component';
import { SecondComponent } from './Details/second.component';

const routes: Routes = [
  { path:'first', component: FirstComponent}, 
  { path: 'second', component: SecondComponent},
  { path: '', redirectTo:'app', pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
