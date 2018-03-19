import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database-deprecated";
import {Channel} from "../../models/channel/channel";
import {ChannelMessage} from "../../models/channel/channel-message";
import {Message} from "../../models/messages/message";

/*
  Generated class for the ChatProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChatProvider {

  constructor(private database: AngularFireDatabase) {
  }

  addChannel(channelName: string){
    this.database.list(`channel-names`).push({
      name: channelName
    });
  }

  getChannelListRef(){
    return this.database.list(`channel-names`);
  }

  getChannelChatRef(channelKey: string){
    return this.database.list(`channels/${channelKey}`);
  }

  async sendChannelChatMessage(channelKey: string, message: ChannelMessage){
    await this.database.list(`/channels/${channelKey}`).push(message)
  }

  async sendChat(message: Message){
    await this.database.list('/messages').push(message);
  }
}
