import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WorksComponent } from './works/works.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactComponent } from './contact/contact.component';
import { TestComponent } from './test/test.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    WorksComponent,
    BlogsComponent,
    ContactComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule, 
    HttpClientModule, BrowserAnimationsModule,
    MatCheckboxModule,
    MatCardModule,
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
