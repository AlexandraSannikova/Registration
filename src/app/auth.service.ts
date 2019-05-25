import { Injectable } from '@angular/core';
import {NbDialogRef, NbDialogService} from '@nebular/theme';
import {SignFormComponent} from './sign-form/sign-form.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private dialogService: NbDialogService) { }

  private isSignInForm: boolean;
  dialogRef: NbDialogRef<SignFormComponent>;


  get isAuth(): boolean {
    return !!localStorage.getItem('isAuth');
  }

   get getUsers(): any {
    return JSON.parse(localStorage.getItem('users') || '[]');
  }

  get getUserName(): string {
    const name = localStorage.getItem('userName');
    return name;
  }

  searchUsers(search: string): any {
    const users = this.getUsers;
    return users.filter(x => {
      return x.name === search ||
        x.login === search ||
        x.email === search ;
    });
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

  register(name: string, login: string, email: string, password: string, confirmPassword: string) {
    const users = this.getUsers;
    const len = Object.keys(users).length;

    users.push({id: len, name, login, email, pass: password});

    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('isAuth', 'true');
    localStorage.setItem('userName', login);
    this.closeForm();
  }

  findUser(users: any, login: string, pass: string) {
    return users.find(x => {
      return x.login === login && x.pass === pass;
    });
  }

  logout() {
    localStorage.removeItem('isAuth');
    localStorage.removeItem('userName');
  }

  login(login: string, password: string ) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = this.findUser(users, login, password);
    if (!!!user) {
      throw new Error('неверные данные');
    }
    localStorage.setItem('isAuth', 'true');
    localStorage.setItem('userName', login);
    this.closeForm();
  }


}
