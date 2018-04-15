import {Injectable} from '@angular/core';
import {
  HttpEventType,
  HttpHandler,
  HttpHeaderResponse,
  HttpInterceptor,
  HttpProgressEvent,
  HttpRequest,
  HttpResponse,
  HttpSentEvent,
  HttpUserEvent
} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {TmacHttpConfig} from './tmac-http-config';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable()
export class TmacInterceptors implements HttpInterceptor {

  constructor(private tmacHttpConfig: TmacHttpConfig) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent
    | HttpResponse<any> | HttpUserEvent<any>> {
    const httpRequest = this.tmacHttpConfig.handleRequest(req);
    return next.handle(httpRequest)
      .map(response => {
        if ([HttpEventType.Response, HttpEventType.ResponseHeader].indexOf(response.type) !== -1) {
          return (this.tmacHttpConfig.getHandleResponse()(response, httpRequest) || response);
        }
        return response;
      })
      .catch(error => Observable.throw(this.tmacHttpConfig.handleResponse(error, httpRequest) || error));
  }
}
