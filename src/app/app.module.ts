import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {NbThemeModule, NbLayoutModule, NbButtonModule, NbCardModule, NbDialogModule, NbDialogService, NbInputModule} from '@nebular/theme';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { SignFormComponent } from './sign-form/sign-form.component';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SwitcherForFormComponent } from './switcher-for-form/switcher-for-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignFormComponent,
    SignInFormComponent,
    SignUpFormComponent,
    SwitcherForFormComponent
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
    FormsModule,
    ReactiveFormsModule,
    NbInputModule
  ],
  providers: [NbDialogService],
  bootstrap: [AppComponent],
  entryComponents: [
    SignFormComponent,
    SignInFormComponent
  ]
})
export class AppModule { }
