import {Injectable} from '@angular/core';
import {TmacHttpClient} from '../../../tmacHttp/tmac-http-client';
import {Observable} from 'rxjs/Observable';
import {Result} from '../../../model/result.model';

@Injectable()
export class AnswerService {

  constructor(private tmacHttpClient: TmacHttpClient) {
  }

  public query(slug: string): Observable<Result> {
    return this.tmacHttpClient
      .post('answer/query', null, {
        params: {slug: slug}
      });
  }

  public publish(answer: any): Observable<Result> {
    return this.tmacHttpClient
      .post('answer/publish', null, {
        params: answer
      });
  }

  public get(page: any): Observable<Result> {
    return this.tmacHttpClient
      .get('answer/get', {
        params: page
      });
  }

  public getCount(): Observable<Result> {
    return this.tmacHttpClient
      .get('answer/get/count', {});
  }

  public getByTitle(page: any): Observable<Result> {
    return this.tmacHttpClient
      .get('answer/getByTitle', {
        params: page
      });
  }

  public getByTitleCount(title: string): Observable<Result> {
    return this.tmacHttpClient
      .get('answer/getByTitle/count', {
        params: {title: title}
      });
  }

}
