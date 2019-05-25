import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.less']
})
export class SignUpFormComponent implements OnInit {
  loginExists = false;

  constructor(private fb: FormBuilder, private authService: AuthService) {
  }

  signUpForm: FormGroup;

  static confirmPass(group: FormGroup) {
    if (group.value.pass === group.value.doublePass) {
      return null;
    }
    return {confirmPass: 'Passwords are different'};
  }

  get headline(): string {
    return this.authService.isAuth ? 'Редактирование' : 'Регистрация';
  }

  get agreeButton(): string {
    return this.authService.isAuth ? 'Сохранить' : 'Зарегистрироваться';
  }

  ngOnInit() {
    this.signUpForm = this.fb.group({
      name: ['', [Validators.required]],
      login: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      passwords: this.fb.group({
        pass: ['', Validators.required],
        doublePass: ['', Validators.required]
      }, {validator: SignUpFormComponent.confirmPass})
    });
  }

  hasConfirmPassError() {
    const isDirty = this.signUpForm.controls.passwords.dirty;
    const hasError = this.signUpForm.controls.passwords.hasError('confirmPass');
    return isDirty && hasError;
  }

  hasMailError() {
    const isDirty = this.signUpForm.controls.email.dirty;
    const hasError = this.signUpForm.controls.email.invalid;
    return hasError && isDirty;
  }

  onSubmit() {
    const {name, login, email, passwords: {pass}} = this.signUpForm.value;
    if (this.authService.isLoginExist(login) && login !== this.authService.getUserName) {
      this.loginExists = true;
      return;
    }

    this.authService.register(name, login, email, pass);
  }

  onCancel() {
    this.authService.closeForm();
  }
}
