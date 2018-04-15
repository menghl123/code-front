import { NgModule, ModuleWithProviders, Optional } from '@angular/core';
import { TmacAuthorizationService } from './Authorization.service';
import { AuthRolePermission } from './AuthRolePermission';
import { AuthLoginPermission } from './AuthLoginPermission';
import { PermissionConfig } from './PermissionConfig';
import {LteRoleDirective} from './LteRole.directive';
import {TmacStorageService} from './storage.service';

export const AUTH_ROLE_PERMISSIONS_PROVIDERS: any[] = [
    TmacAuthorizationService,
    AuthLoginPermission,
    AuthRolePermission,
  TmacStorageService
];

export function providePermission(permissionConfig: PermissionConfig): any[] {
    return [
        ...AUTH_ROLE_PERMISSIONS_PROVIDERS,
        { provide: PermissionConfig, useValue: permissionConfig }
    ];
};


@NgModule({
    imports: [
    ],
    declarations: [LteRoleDirective],
    exports: [
      LteRoleDirective
    ],
    providers: []
})
export class TmacPermissionModule {

    static forRoot(permissionConfig: PermissionConfig): ModuleWithProviders {
        return {
            ngModule: TmacPermissionModule,
            providers: [
                ...providePermission(permissionConfig)
            ]
        };
    }

}
