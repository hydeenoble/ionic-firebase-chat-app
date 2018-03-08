import { Injectable } from '@angular/core';
import {User} from "firebase/app";
import {Profile} from "../../models/profile/profiles";
import {AngularFireDatabase, FirebaseObjectObservable} from "angularfire2/database-deprecated";
import "rxjs/add/operator/take";

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  profileObject: FirebaseObjectObservable<Profile>;

  constructor(private databse: AngularFireDatabase) {
  }

  getProfile(user: User){
    this.profileObject = this.databse.object(`/profiles/${user.uid}`, { preserveSnapshot: true });

    return this.profileObject.take(1);
  }

  async saveProfile(user:User, profile:Profile){
    this.profileObject = this.databse.object(`/profiles/${user.uid}`);

    try{
      await this.profileObject.set(profile);
      return true;
    }catch (e){
      console.log(e)
      return false;
    }
  }
}
