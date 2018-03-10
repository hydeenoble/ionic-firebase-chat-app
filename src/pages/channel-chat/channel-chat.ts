import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Channel} from "../../models/channel/channel";
import {ChatProvider} from "../../providers/chat/chat";
import {FirebaseListObservable} from "angularfire2/database-deprecated";
import {ChannelMessage} from "../../models/channel/channel-message";

/**
 * Generated class for the ChannelChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-channel-chat',
  templateUrl: 'channel-chat.html',
})
export class ChannelChatPage {

  channel: Channel;

  channelMessages: FirebaseListObservable<ChannelMessage[]>

  constructor(private chat: ChatProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillLoad() {
    this.channel = this.navParams.get('channel');
    this.channelMessages = this.chat.getChannelChatRef(this.channel.$key);
  }

  sendMessage(content: string){
    let channelMessage: ChannelMessage = {content}

    this.chat.sendChannelChatMessage(this.channel.$key, channelMessage)
  }

}
