import {Component, EventEmitter, Output} from '@angular/core';
import {DataProvider} from "../../providers/data/data";
import {Profile} from "../../models/profile/profiles";

/**
 * Generated class for the ProfileSearchComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'profile-search',
  templateUrl: 'profile-search.html'
})
export class ProfileSearchComponent {

  query: string;

  profileList: Profile;

  @Output() selectedProfile : EventEmitter<Profile>;

  constructor(private data: DataProvider) {
    this.selectedProfile = new EventEmitter<Profile>();
  }

  searchUser(query: string){

    const trimmedQuery = query.trim();

    if(trimmedQuery === query){
      this.data.searchUser(query).subscribe((profiles) => {
        console.log(profiles);
        this.profileList = profiles;
      });
    }

  }

  selectProfile(profile: Profile){
    this.selectedProfile.emit(profile);
  }
}
