import { Injectable } from '@angular/core';
import {NbDialogRef, NbDialogService} from '@nebular/theme';
import {SignFormComponent} from './sign-form/sign-form.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private dialogService: NbDialogService) { }

  // isAuth = false;
  private isSignInForm: boolean;
  dialogRef: NbDialogRef<SignFormComponent>;
  get isAuth(): boolean {
    return !!localStorage.getItem('isAuth');
  }

  getUserName(): string {
    return localStorage.getItem('userName');
  }

  toggle() {
    this.isSignInForm = !this.isSignInForm;
  }

  getIsSignInForm() {
    return this.isSignInForm;
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

  closeForm() {
    this.dialogRef.close();
  }

  register(login: string, password: string, confirmPassword: string) {
    localStorage.setItem('isAuth', 'true');
    localStorage.setItem('userName', login);
    this.closeForm();
  }

  logout() {
    localStorage.removeItem('isAuth');
    localStorage.removeItem('userName');
  }

  login(login: string, password: string ) {
    localStorage.setItem('isAuth', 'true');
    localStorage.setItem('userName', login);
    this.closeForm();
  }


}
