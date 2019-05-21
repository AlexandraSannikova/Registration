import { Injectable } from '@angular/core';
import {NbDialogRef, NbDialogService} from '@nebular/theme';
import {SignFormComponent} from './sign-form/sign-form.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private dialogService: NbDialogService) { }

  isAuth = false;
  private isSignInForm: boolean;
  dialogRef: NbDialogRef<SignFormComponent>;

  getUserName(): string {
    return 'Sasha';
  }

  openForm() {
    this.dialogRef = this.dialogService.open(SignFormComponent);
  }

  openSignInDialog() {
    this.isSignInForm = true;
    this.openForm();
  }

  openSignUpDialog() {
    this.isSignInForm = false;
    this.openForm();
  }
}
