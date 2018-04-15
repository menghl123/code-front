import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {TmacHttpOptions} from './tmac-http-model';
import {Observable} from 'rxjs/Observable';
import {TmacHttpConfig} from './tmac-http-config';

@Injectable()
export class TmacHttpClient {


  get<T>(url: string, options?: TmacHttpOptions): Observable<T> {
    const httpOptions = this.generateHttpOptions(options);
    return this.httpClient.get(`${this.TmacHttpConfig.getBaseUrl()}/${url}`, httpOptions) as any;
  }

  delete<T>(url: string, options?: TmacHttpOptions): Observable<T> {
    const httpOptions = this.generateHttpOptions(options);
    return this.httpClient.delete(`${this.TmacHttpConfig.getBaseUrl()}/${url}`, httpOptions) as any;
  }

  post<T>(url: string, body: any, options?: TmacHttpOptions): Observable<T> {
    const httpOptions = this.generateHttpOptions(options);
    return this.httpClient.post(`${this.TmacHttpConfig.getBaseUrl()}/${url}`, body, httpOptions) as any;
  }

  put<T>(url: string, body: any, options?: TmacHttpOptions): Observable<T> {
    const httpOptions = this.generateHttpOptions(options);
    return this.httpClient.put(`${this.TmacHttpConfig.getBaseUrl()}/${url}`, body, httpOptions) as any;
  }

  constructor(private httpClient: HttpClient, private TmacHttpConfig: TmacHttpConfig) {
  }

  private generateHttpOptions(options: TmacHttpOptions) {
    const generateOptions = {};
    if (options && options.params) {
      let params = new HttpParams();
      Object.keys(options.params).forEach(key => {
        params = params.set(key, options.params[key]);
      });
      generateOptions['params'] = params;
    }
    if (options && options.headers) {
      let headers = new HttpHeaders();
      Object.keys(options.headers).forEach(key => {
        headers = headers.set(key, options.headers[key]);
      });
      generateOptions['headers'] = headers;
    }
    return generateOptions as any;
  }
}
