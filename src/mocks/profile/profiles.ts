import {Profile} from "../../models/profile/profiles";

const userList: Profile[] = [
  {firstName: 'Idowu', lastName: 'Emehinola', email: 'hydeenoble@github.com', avatar: 'assets/imgs/avatar.png', dateOfBirth: new Date()},
  {firstName: 'John', lastName: 'Doe', email: 'johndoe@github.com', avatar: 'assets/imgs/avatar.png', dateOfBirth: new Date()},
  {firstName: 'Abeeb', lastName: 'Amoo', email: 'abeebamoo@github.com', avatar: 'assets/imgs/avatar.png', dateOfBirth: new Date()},
  {firstName: 'David', lastName: 'Mogbeyi', email: 'davidmogbeyi@github.com', avatar: 'assets/imgs/avatar.png', dateOfBirth: new Date()},
]

export const USER_LIST = userList;
