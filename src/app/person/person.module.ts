import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person.component';
import {ShareModule} from '../share/share.module';
import {RouterModule} from '@angular/router';
import {ROUTER_CONFIG} from './person.router';

@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild(ROUTER_CONFIG)
  ],
  declarations: [PersonComponent]
})
export class PersonModule { }
