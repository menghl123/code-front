import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {TmacAuthorizationService} from './Authorization.service';

@Directive({
  providers: [],
  selector: '[lteRole]'
})
export class LteRoleDirective {
  private _prevCondition: boolean = null;

  constructor(private _viewContainer: ViewContainerRef,
              private _templateRef: TemplateRef<any>,
              private  authorizationService: TmacAuthorizationService) {
  }

  @Input("lteRole")
  set role(roles: string | string[]) {
    const hasRight = this.authorizationService.hasRight(roles);
    if (hasRight && (this.isBlank(this._prevCondition) || !this._prevCondition)) {
      this._prevCondition = true;
      this._viewContainer.createEmbeddedView(this._templateRef);
    } else if (!hasRight && (this.isBlank(this._prevCondition) || this._prevCondition)) {
      this._prevCondition = false;
      this._viewContainer.clear();
    }
  }

  isBlank(obj) {
    return obj === null || obj === undefined;
  }
}
