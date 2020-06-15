import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { CmentorComponent } from './cmentor/cmentor.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CstudentComponent } from './cstudent/cstudent.component';
import { AssignComponent } from './assign/assign.component';
import { UpdateComponent } from './update/update.component';
import { ListComponent } from './list/list.component';
@NgModule({
  declarations: [
    AppComponent,
    CmentorComponent,
    CstudentComponent,
    AssignComponent,
    UpdateComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
