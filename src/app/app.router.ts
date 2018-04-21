import {Routes} from '@angular/router';
import {AuthLoginPermission} from '../tmacPermission/AuthLoginPermission';

export const ROUTER_CONFIG: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/exam/publish'},
  {path: 'register', loadChildren: 'app/register/register.module#RegisterModule'},
  {path: 'login', loadChildren: 'app/login/login.module#LoginModule'},
  {path: 'person', loadChildren: 'app/person/person.module#PersonModule', canActivate: [AuthLoginPermission]},
  {path: 'rank', loadChildren: 'app/rank/rank.module#RankModule', canActivate: [AuthLoginPermission]},
  {path: 'exam', loadChildren: 'app/exam/exam.module#ExamModule', canActivate: [AuthLoginPermission]},
  {path: '**', pathMatch: 'full', redirectTo: '/exam/publish'},
];
