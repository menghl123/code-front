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

  allLoading = false;
  dayLoading = false;
  checkLoading = false;

  constructor(private authorizationService: TmacAuthorizationService,
              private messageService: NzMessageService,
              private integralService: IntegralService,
              private userService: UserService) {
    this.allRankers = [
      {nickName: 1111, count: 2212121},
      {nickName: 1111, count: 2212121},
      {nickName: 1111, count: 2212121},
      {nickName: 1111, count: 2212121},
      {nickName: 1111, count: 2212121},
      {nickName: 1111, count: 2212121},
      {nickName: 1111, count: 2212121},
      {nickName: 1111, count: 2212121},
      {nickName: 1111, count: 2212121},
      {nickName: 1111, count: 2212121},
    ]
  }

  ngOnInit() {
    BreadcrumbService.setBreadcrumbService([
      {label: '积分榜'}
    ]);
    this.initRankers();
  }

  private initRankers() {
    this.allLoading = true;
    this.checkLoading = true;
    this.dayLoading = true;
    this.integralService.all()
      .subscribe(result => {
        if (result.status === 200) {
          this.allRankers = result.data;
        } else {
          this.allLoading = false;
        }
      }, error => {
        this.allLoading = false;
      });

    this.integralService.day()
      .subscribe(result => {
        if (result.status === 200) {
          this.dayRankers = result.data;
        } else {
          this.dayLoading = false;
        }
      }, error => {
        this.dayLoading = false;
      });

    this.integralService.check()
      .subscribe(result => {
        if (result.status === 200) {
          this.checkRankers = result.data;
        } else {
          this.checkLoading = false;
        }
      }, error => {
        this.checkLoading = false;
      });
  }

  freshAllRank(type: 'desc' | 'asc') {
    this.allLoading = true;
    this.integralService.all(type)
      .subscribe(result => {
        if (result.status === 200) {
          this.allRankers = result.data;
        } else {
          this.allLoading = false;
        }
      }, error => {
        this.allLoading = false;
      });
  }

  freshDayRank(type: 'desc' | 'asc') {
    this.dayLoading = true;
    this.integralService.day(type)
      .subscribe(result => {
        if (result.status === 200) {
          this.dayRankers = result.data;
        } else {
          this.dayLoading = false;
        }
      }, error => {
        this.dayLoading = false;
      });
  }

  freshCheckRank(type: 'desc' | 'asc') {
    this.checkLoading = true;
    this.integralService.check(type)
      .subscribe(result => {
        if (result.status === 200) {
          this.checkRankers = result.data;
        } else {
          this.checkLoading = false;
        }
      }, error => {
        this.checkLoading = false;
      });
  }
}
