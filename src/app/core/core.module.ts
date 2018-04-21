import {NgModule} from '@angular/core';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {TmacPermissionModule} from '../../tmacPermission/rebirth-permission.module';
import {TmacHttpModule} from '../../tmacHttp/tmac-http.module';
import {BreadcrumbService} from './common-service/breadcrumb.service';
import {RegisterValidator} from './validator/register.validator';
import {UserService} from './business-service/user.service';
import {IntegralService} from './business-service/integral.service';
import {AnswerService} from './business-service/answer.service';

@NgModule({
  imports: [
    NgZorroAntdModule.forRoot(),
    TmacPermissionModule.forRoot({loginPage: '/login'}),
    TmacHttpModule
  ],
  declarations: [],
  providers: [
    BreadcrumbService,
    RegisterValidator,
    UserService,
    IntegralService,
    AnswerService
  ]
})
export class CoreModule {
}
