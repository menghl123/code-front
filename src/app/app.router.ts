import {Routes} from '@angular/router';

export const ROUTER_CONFIG: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/register'},
  {path: 'register', loadChildren: 'app/register/register.module#RegisterModule'},
  {path: 'login', loadChildren: 'app/login/login.module#LoginModule'},
  {path: 'person', loadChildren: 'app/person/person.module#PersonModule'},
];
