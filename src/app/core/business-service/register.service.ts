import { Injectable } from '@angular/core';
import {TmacHttpClient} from '../../../tmacHttp/tmac-http-client';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class RegisterService {


  constructor(private tmacHttpClient: TmacHttpClient) {
  }

  public register(user: any): Observable<any> {
    return this.tmacHttpClient
      .post('index/register', user);
  }

}
