import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Profile} from "../../models/profile/profiles";
import {DataProvider} from "../../providers/data/data";
import {AuthProvider} from "../../providers/auth/auth";
import {Subscription} from "rxjs/Subscription";
import {User} from "firebase/app";

/**
 * Generated class for the EditProfileFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'edit-profile-form',
  templateUrl: 'edit-profile-form.html'
})
export class EditProfileFormComponent implements OnInit, OnDestroy{

  @Input() profile : Profile;

  private authenticatedUser$: Subscription;
  private authenticatedUser: User;

  @Output() saveProfileResult: EventEmitter<Boolean>;


  constructor(private auth: AuthProvider, private data: DataProvider) {
    this.authenticatedUser$ = this.auth.getAuthenticatedUser()
      .subscribe((user: User) => {
        this.authenticatedUser = user;
      });

    this.saveProfileResult = new EventEmitter<Boolean>();
  }

  ngOnInit(){
    if(!this.profile){
      this.profile = {} as Profile;
    }
  }

  async saveProfile(){
    if (this.authenticatedUser){
      this.profile.email = this.authenticatedUser.email;
      const result =  await this.data.saveProfile(this.authenticatedUser, this.profile);
      this.saveProfileResult.emit(result);
    }
  }

  ngOnDestroy(): void {
    this.authenticatedUser$.unsubscribe();
  }
}
