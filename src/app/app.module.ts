import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormaleducationComponent } from './formaleducation/formaleducation.component';
import { ExperinceComponent } from './experince/experince.component';
import { MainComponent } from './main/main.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes : Routes = [
                            {path : "homepage" , component : HomepageComponent},
                            {path : "formaleducation" , component : FormaleducationComponent},
                            {path : "experince" , component : ExperinceComponent},
                            {path : "contact" , component : ContactComponent}]



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    FormaleducationComponent,
    ExperinceComponent,
    MainComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
