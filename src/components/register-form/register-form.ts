import {Component, EventEmitter, Output} from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth'
import { Account } from "../../models/account/account";
import {AuthProvider} from "../../providers/auth/auth";
import {LoginResponse} from "../../models/login/login.response";

/**
 * Generated class for the RegisterFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'register-form',
  templateUrl: 'register-form.html'
})
export class RegisterFormComponent {

  account = {} as Account;

  @Output() registerStatus: EventEmitter<LoginResponse>;

  constructor(private auth: AuthProvider, private afAuth: AngularFireAuth) {
    this.registerStatus = new EventEmitter<LoginResponse>();
  }

  async register(){
    try{
      const result  = await this.auth.createUserWithEmailAndPassword(this.account);
      this.registerStatus.emit(result);
    }catch (e){
      console.error(e);
      this.registerStatus.emit(e)
    }
  }

}
