import {Injectable} from '@angular/core';
import {TmacHttpClient} from '../../../tmacHttp/tmac-http-client';
import {Observable} from 'rxjs/Observable';
import {Result} from '../../../model/result.model';

@Injectable()
export class IntegralService {

  constructor(private tmacHttpClient: TmacHttpClient) {
  }

  public day(type?: 'asc' | 'desc'): Observable<Result> {
    return this.tmacHttpClient
      .get('integral/day', {
        params: {type: type || 'asc', ignoreLoading: true}
      });
  }

  public all(type?: 'asc' | 'desc'): Observable<Result> {
    return this.tmacHttpClient
      .get('integral/day', {
        params: {type: type || 'asc', ignoreLoading: true}
      });
  }

  public check(type?: 'asc' | 'desc'): Observable<Result> {
    return this.tmacHttpClient
      .get('integral/day', {
        params: {type: type || 'asc', ignoreLoading: true}
      });
  }

}
