import {Component, OnInit} from '@angular/core';
import {TmacAuthorizationService} from '../../tmacPermission/Authorization.service';
import {NzMessageService} from 'ng-zorro-antd';
import {UserService} from '../core/business-service/user.service';
import {BreadcrumbService} from '../core/common-service/breadcrumb.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements OnInit {

  constructor(private authorizationService: TmacAuthorizationService,
              private messageService: NzMessageService,
              private userService: UserService) {
  }

  ngOnInit() {
    BreadcrumbService.setBreadcrumbService([
      {label: '发布题解'}
    ]);
  }

}
