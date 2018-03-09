import { Injectable } from '@angular/core';
import {User} from "firebase/app";
import {Profile} from "../../models/profile/profiles";
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2/database-deprecated";
import "rxjs/add/operator/take";
import {AuthProvider} from "../auth/auth";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  profileObject: FirebaseObjectObservable<Profile>;
  profileList: FirebaseListObservable<Profile>;

  constructor(private authService: AuthProvider, private database: AngularFireDatabase) {
  }

  searchUser(firstName: string){
    const query = this.database.list('/profiles', ref => {
      ref.orderByChild('firstName').equalTo(firstName);
    });

    return query.take(1);
  }

  getProfile(user: User){
    this.profileObject = this.database.object(`/profiles/${user.uid}`, { preserveSnapshot: true });

    return this.profileObject.take(1);
  }

  async saveProfile(user:User, profile:Profile){
    this.profileObject = this.database.object(`/profiles/${user.uid}`);

    try{
      await this.profileObject.set(profile);
      return true;
    }catch (e){
      console.log(e)
      return false;
    }
  }


  getAuthenticatedUserProfile(){
    return this.authService.getAuthenticatedUser()
      .map(user => user.uid)
      .mergeMap(authId => this.database.object(`profiles/${authId}`))
      .take(1);
  }
}
