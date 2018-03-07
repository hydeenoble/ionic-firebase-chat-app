import { Component, EventEmitter, Output} from '@angular/core';
import { NavController } from "ionic-angular";
import { AngularFireAuth } from 'angularfire2/auth';

import { Account } from "../../models/account/account";
import {LoginResponse} from "../../models/login/login.response";

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

  constructor(private afAuth: AngularFireAuth, private navCtrl: NavController ) {
    this.loginStatus = new EventEmitter<any>();
  }

  async login(){

    try{

      const result: LoginResponse = {
        result: await this.afAuth.auth.signInWithEmailAndPassword(this.account.email, this.account.password)
      }

      this.loginStatus.emit(result);

    }catch (e){
      const error: LoginResponse = {
        error: e
      }

      this.loginStatus.emit(error);
    }

  }

  naviagteToRegisterPage(){
    this.navCtrl.push('RegisterPage');
  }

}
