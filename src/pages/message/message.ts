import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Profile} from "../../models/profile/profiles";
import {Message} from "../../models/messages/message";
import {MESSAGE_LIST} from "../../mocks/messages/messages";
import {AuthProvider} from "../../providers/auth/auth";

/**
 * Generated class for the MessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {

  selectedProfile: Profile;

  messageList: Message[];

  userId: string;

  constructor(private auth: AuthProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.messageList = MESSAGE_LIST;
  }

  ionViewWillLoad() {
    this.selectedProfile = this.navParams.get('profile');
    this.auth.getAuthenticatedUser().subscribe((auth) => {
      this.userId  = auth.uid;
    });
  }

}
