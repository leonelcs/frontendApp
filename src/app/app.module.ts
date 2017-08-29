import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { NoteDetailComponent } from './note-detail.component';
import { CustomerDetailComponent } from './customer-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    NoteDetailComponent,
    CustomerDetailComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
