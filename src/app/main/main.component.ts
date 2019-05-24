import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
    // this.users = this.auth.getUsers;
    // this.curUser = this.auth.getUserName;

  }

  get users(): any {
    return this.auth.getUsers;
  }

  get user(): string {
    return this.auth.getUserName;
  }

  isLoggedUser(user: any): boolean {
    return  this.user === user.login;
  }



}
