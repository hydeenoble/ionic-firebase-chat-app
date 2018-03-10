import {Component, OnInit} from '@angular/core';
import {DataProvider} from "../../providers/data/data";
import {FirebaseListObservable} from "angularfire2/database-deprecated";
import {Profile} from "../../models/profile/profiles";

/**
 * Generated class for the OnlineUsersComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'online-users',
  templateUrl: 'online-users.html'
})
export class OnlineUsersComponent implements OnInit {

  userList: FirebaseListObservable<Profile[]>;

  constructor(private data: DataProvider) {

  }

  setUserOnline(){
    this.data.getAuthenticatedUserProfile().subscribe(profile => {
      this.data.setUserOnline(profile);
    })
  }

  ngOnInit(){
    this.setUserOnline();
    this.getOnlineUsers();
  }

  getOnlineUsers(){
    this.userList = this.data.getOnlineUsers();
  }
}
