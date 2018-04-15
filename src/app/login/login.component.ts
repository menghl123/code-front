import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../core/business-service/login.service';
import {TmacAuthorizationService} from '../../tmacPermission/Authorization.service';
import {NzMessageService} from 'ng-zorro-antd';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private authorizationService: TmacAuthorizationService,
              private messageService: NzMessageService,
              private router: Router,
              private loginService: LoginService) {
    this.form = this.fb.group({
      mail: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit() {
  }

  doLogin() {
    this.loginService.loginMock(this.form.value)
      .subscribe((user) => {
        this.authorizationService.setCurrentUser(user);
        this.messageService.success(`登录成功，欢迎您！${user.nickName}`);
        this.router.navigate(['/']);
      }, error => {
      });

  }

}
