import {Component, OnInit} from '@angular/core';
import {AnswerService} from '../../core/business-service/answer.service';
import {environment} from '../../../environments/environment';
import {BreadcrumbService} from '../../core/common-service/breadcrumb.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-exam-list',
  templateUrl: './exam-list.component.html',
  styleUrls: ['./exam-list.component.scss']
})
export class ExamListComponent implements OnInit {
  _current = 1;
  _pageSize = 10;
  _total = 1;
  _dataSet = [];
  _sortValue = null;
  _filterGender = [
    {name: 'male', value: false},
    {name: 'female', value: false}
  ];

  mode: 'all' | 'title' | 'user' = 'all';
  title: string = '';

  sort(value) {
    this._sortValue = value;
    this.refreshData();
  }

  reset() {
    this._filterGender.forEach(item => {
      item.value = false;
    });
    this.refreshData(true);
  }

  constructor(private answerService: AnswerService,
              private router: Router) {
    BreadcrumbService.setBreadcrumbService([
      {label: '题解列表'}
    ]);
  }

  refreshData(reset = false) {
    if (reset) {
      this._current = 1;
    }

    if (this.mode === 'all') {
      this.answerService.getCount().subscribe(result => {
        if (result.status === 200) {
          this._total = result.data;
          this.answerService.get({page: this._current, rows: this._pageSize}).subscribe(($result: any) => {
            this._dataSet = $result.data;
          });
        }
      });
    } else if (this.mode === 'title') {
      this.answerService.getByTitleCount(this.title).subscribe(result => {
        if (result.status === 200) {
          this._total = result.data;
          this.answerService.getByTitle({
            page: this._current,
            rows: this._pageSize,
            title: this.title
          }).subscribe(($result: any) => {
            this._dataSet = $result.data;
          });
        }
      });
    }


  }

  ngOnInit() {
    this.refreshData();
  }

  detail(id: string) {
    const destUrl = `${environment.api.ip}/html/${id}.html`;
    window.open(destUrl);
  }

  goUserDetail(data) {
    this.router.navigate(['/person', data.userId]);
  }

  changeMode(mode: 'all' | 'title') {
    this.refreshData();
  }

  tagsMapper(tags) {
    return tags.split(',').filter(tag => tag && tag !== '');
  }
}
