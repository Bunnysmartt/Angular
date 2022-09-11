import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazycontactComponent } from './lazycontact/lazycontact.component';

const routes: Routes =[{path: 'lazy-contact', component: LazycontactComponent}]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class LazyloadingModule { }
