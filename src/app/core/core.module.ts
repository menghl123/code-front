import {NgModule} from '@angular/core';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {TmacPermissionModule} from '../../tmacPermission/rebirth-permission.module';
import {TmacHttpModule} from '../../tmacHttp/tmac-http.module';
import {RegisterService} from './business-service/register.service';
import {LoginService} from './business-service/login.service';
import {BreadcrumbService} from './common-service/breadcrumb.service';

@NgModule({
  imports: [
    NgZorroAntdModule.forRoot(),
    TmacPermissionModule.forRoot({loginPage: '/login'}),
    TmacHttpModule
  ],
  declarations: [],
  providers: [
    RegisterService,
    LoginService,
    BreadcrumbService
  ]
})
export class CoreModule {
}
