import {Routes} from '@angular/router';
import {PersonComponent} from './person.component';
import {AuthLoginPermission} from '../../tmacPermission/AuthLoginPermission';

export const ROUTER_CONFIG: Routes = [
    {
      path: '', component: PersonComponent, canActivate: [AuthLoginPermission],
    },
    {
      path: ':id', component: PersonComponent, canActivate: [AuthLoginPermission]
    }
  ]
;
