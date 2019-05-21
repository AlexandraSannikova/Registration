import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-switcher-for-form',
  templateUrl: './switcher-for-form.component.html',
  styleUrls: ['./switcher-for-form.component.less']
})
export class SwitcherForFormComponent implements OnInit {
  get isSignInForm() {
    return this.autoService.getIsSignInForm();
  }

  constructor(private autoService: AuthService) { }

  ngOnInit() {
  }

  toggleForm() {
    this.autoService.toggle();
  }

}
