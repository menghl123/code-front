import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {PermissionConfig} from './PermissionConfig';
import {TmacStorageService} from './storage.service';

const isBlank = (obj) => {
  return obj === null || obj === undefined;
};

@Injectable()
export class TmacAuthorizationService {
  private static STORAGE_KEY = 'current-user';
  private currentUser: any;

  constructor(private storageService: TmacStorageService,
              private permissionConfig: PermissionConfig) {
  }

  setCurrentUser(currentUser: any): void {
    this.storageService.save(TmacAuthorizationService.STORAGE_KEY, currentUser)
    this.currentUser = currentUser;
  }

  getCurrentUser(): any {
    if (this.currentUser) {
      return this.currentUser;
    }
    return this.currentUser = this.storageService.get(TmacAuthorizationService.STORAGE_KEY);
  }

  logout() {
    this.currentUser = null;
    return this.storageService.remove(TmacAuthorizationService.STORAGE_KEY);
  }

  isLogin() {
    return !!this.getCurrentUser();
  }

  hasRight(functions: any | any[]): Observable<boolean> | boolean {
    if (!this.getCurrentUser()) {
      return false;
    }

    if (!Array.isArray(functions)) {
      functions = [functions];
    }
    const hasFunctions = this.getCurrentUser().functions.map(func => func.id);
    return this.currentUser.functions && functions.some(func => hasFunctions.indexOf(func) !== -1);
  }
}
