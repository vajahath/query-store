import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
