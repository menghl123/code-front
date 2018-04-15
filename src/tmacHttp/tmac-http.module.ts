import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {TmacHttpClient} from './tmac-http-client';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {TmacInterceptors} from './tmac-http-interceptors';
import {TmacHttpConfig} from './tmac-http-config';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    TmacHttpConfig,
    TmacHttpClient,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TmacInterceptors,
      multi: true,
    }]
})
export class TmacHttpModule {
}
