import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { MaterialDatePickerComponent } from './material-date-picker/material-date-picker.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDatepickerModule, MatInputModule, MatNativeDateModule } from '@angular/material';
import { NormalComponent } from './normal/normal.component';


@NgModule({
  declarations: [
    AppComponent,
    NameEditorComponent,
    MaterialDatePickerComponent,
    NormalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
