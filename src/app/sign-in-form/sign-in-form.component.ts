import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.less']
})
export class SignInFormComponent implements OnInit {
  private signInForm: FormGroup;
  errorAuth = false;

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.signInForm = this.fb.group({
      login: ['', [Validators.required]],
      pass: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  isControlInvalid(): boolean {
    const isDirty = this.signInForm.controls.pass.dirty;
    const control = this.signInForm.controls.pass;
    const result = control.invalid && isDirty;

    return result;
  }

  onSubmit() {
    // this.errorAuth = false;
    const {login, pass} = this.signInForm.value;
    try {
      this.authService.login(login, pass);
    } catch (e) {
      this.errorAuth = true;
    }
  }

}
