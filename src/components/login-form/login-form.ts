import { Component } from '@angular/core';
import { NavController } from "ionic-angular";
import { AngularFireAuth } from 'angularfire2/auth';

import { Account } from "../../models/account/account";

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

  constructor(private afAuth: AngularFireAuth, private navCtrl: NavController ) {
    console.log('Hello LoginFormComponent Component');
  }

  async login(){

    try{
      const result = await this.afAuth.auth
        .signInWithEmailAndPassword(this.account.email, this.account.password);
      console.log(result);
    }catch (e){
      console.log(e);
    }

  }
  naviagteToPage(pageName: string){
    pageName === 'TabsPage' ? this.navCtrl.setRoot(pageName) : this.navCtrl.push(pageName);
  }

}
