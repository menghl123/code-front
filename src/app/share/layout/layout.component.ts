import {Component, OnInit} from '@angular/core';
import {Breadcrumb, BreadcrumbService} from '../../core/common-service/breadcrumb.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  breadcrumbs: Breadcrumb[];

  constructor() {
    BreadcrumbService.breadChangeSubject.subscribe(breadcrumbs => {debugger
      this.breadcrumbs = breadcrumbs;
    });
  }

  ngOnInit() {

  }

}
