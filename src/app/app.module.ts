import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // for ngModel

import { AppComponent } from './app.component';

// components
import { AppViewerComponent } from './viewer/viewer.component';
import { AppCreateComponent } from './create/create.component';
import { AppEditorComponent } from './editor/editor.component';

@NgModule({
  declarations: [
    AppComponent,
    AppViewerComponent,
    AppCreateComponent,
    AppEditorComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
