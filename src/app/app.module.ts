import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {NbThemeModule, NbLayoutModule, NbButtonModule, NbCardModule, NbDialogModule, NbDialogService} from '@nebular/theme';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { SignFormComponent } from './sign-form/sign-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignFormComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    NbThemeModule.forRoot(),
    NbLayoutModule,
    AppRoutingModule,
    NbLayoutModule,
    NbButtonModule,
    NbCardModule,
    NbDialogModule.forRoot(),
  ],
  providers: [NbDialogService],
  bootstrap: [AppComponent],
  entryComponents: [
    SignFormComponent
  ]
})
export class AppModule { }
