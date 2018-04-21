import {Component, OnInit} from '@angular/core';
import {TmacAuthorizationService} from '../../tmacPermission/Authorization.service';
import {NzMessageService} from 'ng-zorro-antd';
import {UserService} from '../core/business-service/user.service';
import {BreadcrumbService} from '../core/common-service/breadcrumb.service';
import {IntegralService} from '../core/business-service/integral.service';

@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.scss']
})
export class RankComponent implements OnInit {
  allRankers: any[];
  dayRankers: any[];
  checkRankers: any[];

  constructor(private authorizationService: TmacAuthorizationService,
              private messageService: NzMessageService,
              private integralService: IntegralService,
              private userService: UserService) {
  }

  ngOnInit() {
    BreadcrumbService.setBreadcrumbService([
      {label: '积分榜'}
    ]);
    this.initRankers();
  }

  private initRankers() {
    this.freshAllRank('asc');
    this.freshDayRank('asc');
    this.freshCheckRank('asc');
  }

  freshAllRank(type: 'desc' | 'asc') {
    this.integralService.all(type)
      .subscribe(result => {
        if (result.status === 200) {
          this.allRankers = result.data;
        } else {
        }
      }, error => {
      });
  }

  freshDayRank(type: 'desc' | 'asc') {
    this.integralService.day(type)
      .subscribe(result => {
        if (result.status === 200) {
          this.dayRankers = result.data;
        } else {
        }
      }, error => {
      });
  }

  freshCheckRank(type: 'desc' | 'asc') {
    this.integralService.check(type)
      .subscribe(result => {
        if (result.status === 200) {
          this.checkRankers = result.data;
        } else {
        }
      }, error => {
      });
  }
}
