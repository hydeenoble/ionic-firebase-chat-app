import {Profile} from "../profile/profiles";

export interface Message{
  userFrom: string;

  userFromProfile: {
    firstName: string;
    lastName: string;
  }

  user
}
