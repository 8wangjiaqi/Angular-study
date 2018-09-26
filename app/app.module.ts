import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Parents01Component } from './components/parents01/parents01.component';
import { Child011Component } from './components/child011/child011.component';
import { Child012Component } from './components/child012/child012.component';


@NgModule({
  declarations: [
    AppComponent,
    Parents01Component,
    Child011Component,
    Child012Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
