import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {RegisterValidator} from '../core/validator/register.validator';
import {Router} from '@angular/router';
import {NzMessageService} from 'ng-zorro-antd';
import {UserService} from '../core/business-service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  isVisible = false;

  constructor(private fb: FormBuilder,
              private registerValidator: RegisterValidator,
              private router: Router,
              private nzMessageService: NzMessageService,
              private userService: UserService) {
    this.form = this.fb.group({
      nickName: ['', [Validators.required, Validators.maxLength(16)]],
      mail: ['', [Validators.email, Validators.required], this.registerValidator.mailExist()],
      password: ['', [Validators.required]],
      checkPassword: ['', [Validators.required, this.confirmationValidator]],
      aims: [0, [Validators.required]],
    });
  }

  ngOnInit() {
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return {required: true};
    } else if (control.value !== this.form.controls['password'].value) {
      return {confirm: true, error: true};
    }
  }

  updateConfirmValidator() {
    setTimeout(_ => {
      this.form.controls['checkPassword'].updateValueAndValidity();
    });
  }

  doRegister() {
    this.userService.register(this.form.value)
      .subscribe(result => {
        if (result.status === 200) {
          this.showModal();
        } else {
          this.nzMessageService.error(`注册失败,原因:${result.message}`);
        }
      });
  }

  showModal = () => {
    this.isVisible = true;
  }

  handleOk = (e) => {
    this.isVisible = false;
    this.router.navigate(['/login']);
  }

  handleCancel = (e) => {
    this.isVisible = false;
  }

}
