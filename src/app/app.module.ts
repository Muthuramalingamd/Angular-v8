import { BrowserModule } from '@angular/platform-browser';
import {
  MatButtonModule,
  MatIconModule,MatFormFieldModule,
  MatToolbarModule,MatTableModule,MatInputModule
} from '@angular/material';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// const modules = [
//   MatButtonModule,
//   MatIconModule,
//   MatToolbarModule,
// ];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,MatTableModule,MatInputModule,MatFormFieldModule,
    MatToolbarModule,HttpClientModule,FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
