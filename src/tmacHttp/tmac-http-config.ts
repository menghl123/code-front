import {Injectable} from '@angular/core';
import {TmacInterceptor} from './tmac-http-model';
import {HttpEvent, HttpRequest} from '@angular/common/http';

@Injectable()
export class TmacHttpConfig {
  private baseUrl: string;
  private interceptors: TmacInterceptor[];

  constructor() {
    this.interceptors = [];
  }

  getInterceptors() {
    return this.interceptors;
  }

  setInterceptors(interceptors: TmacInterceptor[]) {
    this.interceptors = interceptors;
  }

  setInterceptor(interceptor: TmacInterceptor) {
    this.interceptors.push(interceptor);
    return this;
  }

  setBaseUrl(baseUrl: string) {
    this.baseUrl = baseUrl;
    return this;
  }

  getBaseUrl(): string {
    return this.baseUrl;
  }

  handleRequest(req: HttpRequest<any>): HttpRequest<any> {
    return this.interceptors
      .filter(item => !!item.request)
      .reduce((httpEvent, item) => {
        return (item.request(httpEvent) || httpEvent);
      }, req);
  }

  getHandleResponse() {
    return (res, req) => {
      this.handleResponse(res, req);
    };
  }

  handleResponse(response: HttpEvent<any>, request?: HttpRequest<any>): HttpEvent<any> {
    return this.interceptors
      .filter(item => !!item.response)
      .reverse()
      .reduce((httpEvent, item) => {
        return item.response(httpEvent, request) || httpEvent;
      }, response);
  }

}
