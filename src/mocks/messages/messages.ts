import { Message } from "../../models/messages/message";
import {USER_LIST} from "../profile/profiles";

const userList = USER_LIST;
const messageList: Message[] = [];

// userList.forEach((user) => {
//   messageList.push({user: user, date: new Date(), lastMessage: 'Last message...'})
//   messageList.push({user: user, date: new Date(), lastMessage: 'Last message...'})
// })


export const MESSAGE_LIST = messageList;
