import {Profile} from "../profile/profiles";

export interface Message{
  user: Profile;
  date: Date;
  lastMessage: string;
}
