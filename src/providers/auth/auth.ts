import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth'
import {Account} from "../../models/account/account";
import {LoginResponse} from "../../models/login/login.response";
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {


  constructor(private auth: AngularFireAuth) {
    console.log('Hello AuthProvider Provider');
  }

  async signInWithEmailAndPassword(account: Account){
    try{
      return <LoginResponse> {
        result: await this.auth.auth.signInWithEmailAndPassword(account.email, account.password)
      }
    }catch (e){
      return <LoginResponse> {
        error: e
      };
    }
  }

  async createUserWithEmailAndPassword(account: Account){
    try{
      return <LoginResponse> {
        result: await this.auth.auth.createUserWithEmailAndPassword(account.email, account.password)
      }
    }catch (e){
      return <LoginResponse> {
        error: e
      };
    }
  }

  getAuthenticatedUser(){
    return this.auth.authState;
  }

  signOut(){
    this.auth.auth.signOut();
  }
}

