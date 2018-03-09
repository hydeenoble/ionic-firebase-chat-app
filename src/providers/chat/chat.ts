import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database-deprecated";

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
    this.database.list(`/channel-names/`).push({
      name: channelName
    });
  }
}
