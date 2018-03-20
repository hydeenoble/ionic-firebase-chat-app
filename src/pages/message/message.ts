import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Profile} from "../../models/profile/profiles";
import {Message} from "../../models/messages/message";
import {DataProvider} from "../../providers/data/data";
import {ChatProvider} from "../../providers/chat/chat";
import {Observable} from "rxjs/Observable";

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

  messageList: Observable<Message[]>;

  userId: string;

  userProfile: Profile;

  constructor(private chat: ChatProvider, private data: DataProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillLoad() {
    this.selectedProfile = this.navParams.get('profile');
    this.data.getAuthenticatedUserProfile().subscribe(profile => {
      this.userProfile = profile;
      this.userId = profile.$key;
    });

    this.messageList = this.chat.getChats(this.selectedProfile.$key)
  }

  async sendMessage(content: string){
    try{
      const message: Message = {
        userToId: this.selectedProfile.$key,
        userToProfile: {
          firstName: this.selectedProfile.firstName,
          lastName: this.selectedProfile.lastName
        },
        userFromProfile: {
          firstName: this.userProfile.firstName,
          lastName: this.userProfile.lastName
        },
        userFromId: this.userId,
        content: content
      }

      await this.chat.sendChat(message)

    }catch (e){
      console.error(e)
    }
  }

}
