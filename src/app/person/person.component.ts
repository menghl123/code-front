import {Component, OnInit} from '@angular/core';
import {BreadcrumbService} from '../core/common-service/breadcrumb.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    BreadcrumbService.setBreadcrumbService([
      {label: '个人信息'}
    ]);
  }

}
