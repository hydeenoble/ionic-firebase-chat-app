import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {ChatProvider} from "../../providers/chat/chat";
import {Channel} from "../../models/channel/channel";
import {ChannelChatPage} from "../channel-chat/channel-chat";
import {FirebaseListObservable} from "angularfire2/database-deprecated";

/**
 * Generated class for the ChannelsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-channels',
  templateUrl: 'channels.html',
})
export class ChannelsPage {

  channelList: FirebaseListObservable<Channel[]>;

  constructor(private chat: ChatProvider, private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillLoad() {
    this.getChannels();
  }

  selectChannel(channel: string){
    this.navCtrl.push('ChannelChatPage', { channel })
  }


  getChannels(){
    this.channelList = this.chat.getChannelListRef();
  }

  showAddChannelDialog(){
    this.alertCtrl.create({
      title: 'Channel Name',
      inputs: [{
        name: 'channelName'
      }],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Add',
          handler: data => {
            this.chat.addChannel(data.channelName);
          }
        }
      ]
    }).present();
  }

}
