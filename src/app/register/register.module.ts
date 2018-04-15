import {NgModule} from '@angular/core';
import {RegisterComponent} from './register.component';
import {ShareModule} from '../share/share.module';
import {RouterModule} from '@angular/router';
import {ROUTER_CONFIG} from './register.router';

@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild(ROUTER_CONFIG)
  ],
  declarations: [RegisterComponent]
})
export class RegisterModule {

}
