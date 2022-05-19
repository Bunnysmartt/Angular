import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SecondcomponentComponent } from './secondcomponent/secondcomponent.component';

const routes: Routes = [
  { path: 'secondcomponent', component: SecondcomponentComponent },
  { path: 'appcomponent', component: AppComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
