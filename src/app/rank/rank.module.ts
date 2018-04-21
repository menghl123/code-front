import {NgModule} from '@angular/core';
import {RankComponent} from './rank.component';
import {ShareModule} from '../share/share.module';
import {RouterModule} from '@angular/router';
import {ROUTER_CONFIG} from './rank.router';

@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild(ROUTER_CONFIG
    )
  ],
  declarations: [RankComponent]
})
export class RankModule {
}
