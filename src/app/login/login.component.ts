import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TmacAuthorizationService} from '../../tmacPermission/Authorization.service';
import {NzMessageService} from 'ng-zorro-antd';
import {Router} from '@angular/router';
import {UserService} from '../core/business-service/user.service';

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
              private userService: UserService) {
    this.form = this.fb.group({
      mail: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit() {
  }

  doLogin() {
    this.userService.login(this.form.value)
      .subscribe(result => {
        if (result.status === 200) {
          this.authorizationService.setCurrentUser(result.data);
          this.messageService.success(`登录成功，欢迎您！${result.data.nickName}`);
          this.router.navigate(['/person']);
        } else {
          this.messageService.error(`登录失败,原因:${result.message}`);
        }
      }, error => {
      });

  }

}
