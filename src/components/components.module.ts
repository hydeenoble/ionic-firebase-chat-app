import { NgModule } from '@angular/core';
import { IonicModule } from "ionic-angular";

import { LoginFormComponent } from './login-form/login-form';
import { RegisterFormComponent } from './register-form/register-form';
import { EditProfileFormComponent } from './edit-profile-form/edit-profile-form';
import { ProfileViewComponent } from './profile-view/profile-view';
import { ProfileSearchComponent } from './profile-search/profile-search';
import { SendMessageBoxComponent } from './send-message-box/send-message-box';
import { ChatMessageComponent } from './chat-message/chat-message';
import { OnlineUsersComponent } from './online-users/online-users';
import { LastMassageListComponent } from './last-massage-list/last-massage-list';

@NgModule({
	declarations: [LoginFormComponent,
    RegisterFormComponent,
    EditProfileFormComponent,
    ProfileViewComponent,
    ProfileSearchComponent,
    SendMessageBoxComponent,
    ChatMessageComponent,
    OnlineUsersComponent,
    LastMassageListComponent],
	imports: [IonicModule],
	exports: [LoginFormComponent,
    RegisterFormComponent,
    EditProfileFormComponent,
    ProfileViewComponent,
    ProfileSearchComponent,
    SendMessageBoxComponent,
    ChatMessageComponent,
    OnlineUsersComponent,
    LastMassageListComponent]
})
export class ComponentsModule {}
