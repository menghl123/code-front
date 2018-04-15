import { Injectable } from '@angular/core';
import {TmacHttpClient} from '../../../tmacHttp/tmac-http-client';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LoginService {

  constructor(private tmacHttpClient: TmacHttpClient) {
  }

  public login(user: any): Observable<any> {
    return this.tmacHttpClient
      .post('index/register', user);
  }
}
