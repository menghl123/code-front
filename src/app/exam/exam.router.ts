import {Routes} from '@angular/router';
import {ExamListComponent} from './exam-list/exam-list.component';
import {ExamPublishComponent} from './exam-publish/exam-publish.component';
import {ExamComponent} from './exam.component';

export const ROUTER_CONFIG: Routes = [
  {
    path: '', component: ExamComponent, children: [
    {
      path: 'list', component: ExamListComponent,
    },
    {
      path: 'publish', component: ExamPublishComponent,
    }
  ]
  },

];
