import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

export interface Breadcrumb {
  url?: string;
  label?: string;
}

@Injectable()
export class BreadcrumbService {
  static breadChangeSubject: Subject<Breadcrumb[]> = new Subject();

  static breadcrumbs: Breadcrumb[];

  constructor() {
  }

  public static setBreadcrumbService(breadcrumbs: Breadcrumb[]) {
    this.breadcrumbs = breadcrumbs;
    this.breadChangeSubject.next(this.breadcrumbs);
  }
}
