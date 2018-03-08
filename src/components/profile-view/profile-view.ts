import { Component, OnInit} from '@angular/core';
import {DataProvider} from "../../providers/data/data";
import {AuthProvider} from "../../providers/auth/auth";
import {Profile} from "../../models/profile/profiles";
import {User} from "firebase/app";
import {Loading, LoadingController} from "ionic-angular";

/**
 * Generated class for the ProfileViewComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'profile-view',
  templateUrl: 'profile-view.html'
})
export class ProfileViewComponent implements OnInit{

  userProfile: Profile;
  loader: Loading;

  constructor(private loading: LoadingController, private data: DataProvider, private auth: AuthProvider) {
    this.loader = this.loading.create({
      content: 'Loading profile...'
    })
  }

  ngOnInit(){
    this.loader.present();
    this.auth.getAuthenticatedUser().subscribe((user: User) => {
      this.data.getProfile(user).subscribe((profile) => {
        this.userProfile = <Profile>profile.val();
        this.loader.dismiss();
      });
    });
  }
}
