import {NgModule} from '@angular/core';
import {ExamPublishComponent} from './exam-publish/exam-publish.component';
import {ExamListComponent} from './exam-list/exam-list.component';
import {ShareModule} from '../share/share.module';
import {RouterModule} from '@angular/router';
import {ROUTER_CONFIG} from './exam.router';
import { ExamComponent } from './exam.component';

@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild(ROUTER_CONFIG)
  ],
  declarations: [ExamPublishComponent, ExamListComponent, ExamComponent]
})
export class ExamModule {
}
