import {Injectable} from '@angular/core';
import {TmacHttpClient} from '../../../tmacHttp/tmac-http-client';
import {Observable} from 'rxjs/Observable';
import {User} from '../../../model/user.model';
import {Result} from '../../../model/result.model';

@Injectable()
export class UserService {

  constructor(private tmacHttpClient: TmacHttpClient) {
  }

  public check(): Observable<Result> {
    return this.tmacHttpClient
      .post('user/check', null);
  }

  public login(user: User): Observable<Result> {
    return this.tmacHttpClient
      .post('user/login', null, {
        params: user
      });
  }

  public register(user: User): Observable<Result> {
    return this.tmacHttpClient
      .post('user/register', null, {
        params: user
      });
  }

  public exist(mail: string): Observable<Result> {
    return this.tmacHttpClient
      .get('user/exist', {
        params: {mail: mail, ignoreLoading: true}
      });
  }

  public info(id: string): Observable<Result> {
    return this.tmacHttpClient
      .get('user/info', {
        params: {id: id}
      });
  }

  public name(name: string): Observable<Result> {
    return this.tmacHttpClient
      .get('user/name', {
        params: {name: name, ignoreLoading: true}
      });
  }

}
