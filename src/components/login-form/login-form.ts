import { Component, EventEmitter, Output} from '@angular/core';
import { NavController } from "ionic-angular";

import { Account } from "../../models/account/account";
import {LoginResponse} from "../../models/login/login.response";
import {AuthProvider} from "../../providers/auth/auth";

/**
 * Generated class for the LoginFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'login-form',
  templateUrl: 'login-form.html'
})
export class LoginFormComponent {


  account = {} as Account;

  @Output() loginStatus: EventEmitter<LoginResponse>;

  constructor(private auth: AuthProvider, private navCtrl: NavController ) {
    this.loginStatus = new EventEmitter<any>();
  }

  async login(){
    const response = await this.auth.signInWithEmailAndPassword(this.account)
    this.loginStatus.emit(response);
  }

  naviagteToRegisterPage(){
    this.navCtrl.push('RegisterPage');
  }

}
