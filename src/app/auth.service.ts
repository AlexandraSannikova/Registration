import { Injectable } from '@angular/core';
import {NbDialogRef, NbDialogService} from '@nebular/theme';
import {SignFormComponent} from './sign-form/sign-form.component';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private dialogService: NbDialogService, private router: Router) { }

  private isSignInForm: boolean;
  dialogRef: NbDialogRef<SignFormComponent>;


  get isAuth(): boolean {
    return !!localStorage.getItem('isAuth');
  }

   get getUsers(): any {
    return JSON.parse(localStorage.getItem('users') || '[]');
  }

  get getUserName(): string {
    return localStorage.getItem('userName');
  }


  searchUsers(search: string): any {
    const users = this.getUsers;
    if (search === '') {
      return users;
    }
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

  register(name: string, login: string, email: string, password: string) {
    const users = this.getUsers;
    const newUser = {id: null, name, login, email, pass: password };
    if (this.isAuth) {
      const index = this.findIndexOfUser(this.getUserName);
      newUser.id = index;
      users[index] = newUser;
    } else {
      newUser.id = Object.keys(users).length;
      users.push(newUser);
    }

    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('isAuth', 'true');
    localStorage.setItem('userName', login);

    this.closeForm();
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

  logout() {
    localStorage.removeItem('isAuth');
    localStorage.removeItem('userName');
    this.router.navigate(['/']);
  }

  findIndexOfUser(login: string) {
    const users = this.getUsers;
    return users.findIndex(x => x.login === login);
  }


  findUser(users: any, login: string, pass: string) {
    return users.find(x => {
      return x.login === login && x.pass === pass;
    });
  }

  isLoginExist(login: string): boolean {
    return this.getUsers.some(x => x.login === login);
  }
}
