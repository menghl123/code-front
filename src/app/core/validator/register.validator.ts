import { Injectable } from '@angular/core';
import {AbstractControl} from '@angular/forms';
import {UserService} from '../business-service/user.service';

@Injectable()
export class RegisterValidator {

  constructor(private userService: UserService) {
  }

  mailExist(mail?: string) {
    return (control: AbstractControl) => {
      return this.userService.exist(control.value)
        .map(result => {
            return result.data.success === 0 || mail === control.value ? null : {'mailExist': true};
          }
        );
    };
  }

  nameExist(name?: string) {
    return (control: AbstractControl) => {
      return this.userService.name(control.value)
        .map(result => {
            return result.data.success === 0 || name === control.value ? null : {'nameExist': true};
          }
        );
    };
  }

}
