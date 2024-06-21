import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeatComponent } from './seat/seat.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { HelloComponent } from './seat/hello/hello.component';


@NgModule({
  declarations: [
    AppComponent,
    SeatComponent,
    ChildComponent,
    HelloComponent
    
    
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
