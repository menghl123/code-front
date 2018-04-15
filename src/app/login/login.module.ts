import {NgModule} from '@angular/core';
import {LoginComponent} from './login.component';
import {ShareModule} from '../share/share.module';
import {RouterModule} from '@angular/router';
import {ROUTER_CONFIG} from './login.router';

@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild(ROUTER_CONFIG)
  ],
  declarations: [LoginComponent]
})
export class LoginModule {
}
