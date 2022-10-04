import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { BasicpipesComponent } from './basicpipes/basicpipes.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { OurservicesComponent } from './ourservices/ourservices.component';
import { SampleComponent } from './sample/sample.component';
import { ServicesComponent } from './services/services.component';
import { LazycontactComponent } from './lazycontact/lazycontact.component';
import { LazyloadingModule } from './lazyloading.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AddemployeesdataComponent } from './addemployeesdata/addemployeesdata.component';
import { EmployeesdataComponent } from './employeesdata/employeesdata.component';

const routes: Routes = [
  {path: '', component: EmployeesdataComponent},
  {path:'Home', component: HomeComponent},
  {path: 'About', component: AboutComponent},
  {path: 'Services', component: ServicesComponent, children: [{ path : 'ourservices', component: OurservicesComponent}, {path : 'contact', component: ContactComponent }]},
  {path: 'add-employees', component: AddemployeesdataComponent},
  {path: '**', component: PagenotfoundComponent},
  {path:'lazy-contact-modl', loadChildren:()=> LazyloadingModule},
  //{path: '', redirectTo:'app', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
