import { Injectable } from '@angular/core';
import {User} from "firebase/app";
import {Profile} from "../../models/profile/profiles";
import {AngularFireDatabase, FirebaseObjectObservable} from "angularfire2/database-deprecated";

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  profilePbject: FirebaseObjectObservable<Profile>;

  constructor(private databse: AngularFireDatabase) {
  }

  async saveProfile(user:User, profile:Profile){
    this.profilePbject = this.databse.object(`/profiles/${user.uid}`);

    try{
      await this.profilePbject.set(profile);
      return true;
    }catch (e){
      console.log(e)
      return false;
    }
  }
}
