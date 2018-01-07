import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // for ngModel

import { AppComponent } from './app.component';

// components
import { AppViewerComponent } from './viewer/viewer.component';
import { AppCreateComponent } from './create/create.component';
import { AppEditorComponent } from './editor/editor.component';

// services
import { QueryService } from './query.service';
import { AuthService } from './auth.service';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AppViewerComponent,
    AppCreateComponent,
    AppEditorComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [QueryService, AuthService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
