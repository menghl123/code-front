import {Component, OnInit} from '@angular/core';
import {BreadcrumbService} from '../core/common-service/breadcrumb.service';
import {User} from '../../model/user.model';
import {TmacAuthorizationService} from '../../tmacPermission/Authorization.service';
import {UserService} from '../core/business-service/user.service';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  user: User;

  checkStatus: 0 | 1 | 2;

  constructor(private authorizationService: TmacAuthorizationService,
              private messageService: NzMessageService,
              private userService: UserService) {
    this.user = this.authorizationService.getCurrentUser();
    this.initCheckStatus();
  }

  ngOnInit() {
    BreadcrumbService.setBreadcrumbService([
      {label: '个人信息'}
    ]);
  }

  doCheck() {
    this.userService.check().subscribe(result => {
      if (result.status === 200) {
        this.messageService.success('签到成功');
        this.user.check = 1;
        this.authorizationService.setCurrentUser(this.user);
      } else {
        this.messageService.error('签到失败');
      }
    }, error => {
      this.messageService.error('签到失败');
    });
  }

  private initCheckStatus() {
    if (this.user.day < this.user.aims) {
      this.checkStatus = 0;
      return;
    }
    if (this.user.day >= this.user.aims && this.user.check === 1) {
      this.checkStatus = 1;
      return;
    }
    if (this.user.day >= this.user.aims && this.user.check === 0) {
      this.checkStatus = 2;
      return;
    }
  }
}
