import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {RouterModule} from '@angular/router';
import {ShareModule} from './share/share.module';
import {ROUTER_CONFIG} from './app.router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    ShareModule,
    RouterModule.forRoot(ROUTER_CONFIG)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
