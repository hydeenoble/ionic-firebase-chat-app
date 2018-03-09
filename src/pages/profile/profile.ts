import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Profile} from "../../models/profile/profiles";
import {AuthProvider} from "../../providers/auth/auth";

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  existingProfile = {} as Profile;

  constructor(private auth: AuthProvider, private navCtrl: NavController, private navParams: NavParams) {
  }

  getExistingProfile(profile: Profile){
    this.existingProfile = profile;
  }

  signOut(){
    this.auth.signOut();
    this.navCtrl.setRoot('LoginPage')
  }

  navigateToEditProfilePage(){
    this.navCtrl.push('EditProfilePage', {
      existingProfile: this.existingProfile
    })
  }

}
