import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {RegisterService} from '../core/business-service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder,
              private registerService: RegisterService) {
    this.form = this.fb.group({
      nickName: ['', [Validators.required, Validators.maxLength(16)]],
      mail: ['', [Validators.email, Validators.required]],
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
    this.registerService.register(this.form.value)
      .subscribe(() => {

      }, error => {

      })
  }

}
