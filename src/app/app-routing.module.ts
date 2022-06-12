import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './About/about.component';
import { SecondComponent } from './Form/form.component';
import { UserDetailsComponent } from './User-Details/user-details.component';

const routes: Routes = [
  { path:'about', component: FirstComponent}, 
  { path: 'form', component: SecondComponent},
  { path: 'user-details', component: UserDetailsComponent},
  { path: '', redirectTo:'app', pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
