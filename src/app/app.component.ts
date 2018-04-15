import {Component} from '@angular/core';
import {TmacHttpConfig} from '../tmacHttp/tmac-http-config';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isLoading = false;

  constructor(private tmacHttpConfig: TmacHttpConfig) {
    this.tmacHttpConfig
      .setBaseUrl(environment.api.host)
      .setInterceptor({
        request: (req) => {
          if (req && req.params && req.params.get('ignoreLoading')) {
            return;
          }
          this.isLoading = true;
        },
        response: (res) => {
          setTimeout(() => {
            this.isLoading = false;
          }, 500);
        }
      });
  }
}
