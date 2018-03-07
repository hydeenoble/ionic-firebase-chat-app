import { Component } from '@angular/core';
import { NavController } from "ionic-angular";

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


  constructor(private navCtrl: NavController ) {
    console.log('Hello LoginFormComponent Component');
  }

  naviagteToPage(pageName: string){
    pageName === 'TabsPage' ? this.navCtrl.setRoot(pageName) : this.navCtrl.push(pageName);
  }

}
