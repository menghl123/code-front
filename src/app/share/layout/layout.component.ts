import {Component, OnInit} from '@angular/core';
import {Breadcrumb, BreadcrumbService} from '../../core/common-service/breadcrumb.service';
import {User} from '../../../model/user.model';
import {TmacAuthorizationService} from '../../../tmacPermission/Authorization.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  breadcrumbs: Breadcrumb[];
  user: User;

  constructor(private authorizationService: TmacAuthorizationService,
              private router: Router) {
    BreadcrumbService.breadChangeSubject.subscribe(breadcrumbs => {
      this.breadcrumbs = breadcrumbs;
    });
    this.user = this.authorizationService.getCurrentUser();
  }

  ngOnInit() {

  }

  logout() {
    this.authorizationService.logout();
    this.user = null;
    this.router.navigate(['/']);
  }

  navigateByUrl(url: string) {
    this.router.navigate([url]);
  }

}
