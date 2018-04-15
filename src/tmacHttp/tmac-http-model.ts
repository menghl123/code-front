import {HttpErrorResponse, HttpEvent, HttpRequest} from '@angular/common/http';

export interface  TmacHttpOptions {
  url?: string;
  method?: string;
  headers?: { [key: string]: any };
  params?: { [key: string]: any };
  responseType?: string;
}

export interface TmacInterceptor {
  request?: (option: HttpRequest<any>) => HttpRequest<any> | void;
  response?: (response: HttpEvent<any> | HttpErrorResponse, request?: HttpRequest<any>) => HttpEvent<any> | void;
}


