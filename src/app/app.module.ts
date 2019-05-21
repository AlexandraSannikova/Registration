import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {NbThemeModule, NbLayoutModule, NbButtonModule} from '@nebular/theme';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    NbThemeModule.forRoot(),
    NbLayoutModule,
    AppRoutingModule,
    NbLayoutModule,
    NbButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
