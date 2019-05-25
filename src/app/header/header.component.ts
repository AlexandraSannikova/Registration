import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  constructor(private service: AuthService) {
  }

  ngOnInit() {
  }

  get isSignedIn() {
    return this.service.isAuth;
  }

  onSignInClick() {
    this.service.openSignInDialog();
  }

  onSignUpClick() {
    this.service.openSignUpDialog();
  }

  logout() {
    this.service.logout();
  }
}
