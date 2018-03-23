import {Component, OnInit} from '@angular/core';
import {ChatProvider} from "../../providers/chat/chat";
import {Observable} from "rxjs/Observable";
import {Message} from "../../models/messages/message";
import {NavController} from "ionic-angular";

/**
 * Generated class for the LastMassageListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'last-massage-list',
  templateUrl: 'last-massage-list.html'
})
export class LastMassageListComponent implements OnInit{

  messageList$: Observable<Message[]>;

  constructor(private navCtrl: NavController, private chat: ChatProvider) {
    console.log('Hello LastMassageListComponent Component');
  }

  ngOnInit() {
   this.messageList$ =  this.chat.getLastMessagesForUser();
  }

  navigateToMessage(message: Message){
    const selectedProfile = {
      $key: message.userToId,
      firtName: message.userToProfile.firstName,
      lastName: message.userToProfile.lastName
    }

    this.navCtrl.push('MessagePage', {profile: selectedProfile})
  }
}
