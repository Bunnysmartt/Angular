import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SecondComponent } from './Form/form.component';
import { FirstComponent } from './About/about.component';
import { UserDetailsComponent } from './User-Details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondComponent,
    FirstComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
