import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SampleComponent } from './sample/sample.component';
import { BasicpipesComponent } from './basicpipes/basicpipes.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { OurservicesComponent } from './ourservices/ourservices.component';
import { ContactComponent } from './contact/contact.component';
import { LazycontactComponent } from './lazycontact/lazycontact.component';
import { BasicstructuraldirectivesComponent } from './basicstructuraldirectives/basicstructuraldirectives.component';
import { AddsubtitlePipe } from './addsubtitle.pipe';
import { ChangetheelementDirective } from './changetheelement.directive';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    BasicpipesComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    OurservicesComponent,
    ContactComponent,
    LazycontactComponent,
    BasicstructuraldirectivesComponent,
    AddsubtitlePipe,
    ChangetheelementDirective,
    PagenotfoundComponent
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
