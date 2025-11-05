import { Routes } from '@angular/router';
import { Home } from '../app/home/home';
import { Profile } from '../app/profile/profile';
import { Inbox } from '../app/inbox/inbox';
import { ToDoList } from '../app/to-do-list/to-do-list';
import { Contact} from '../app/contact/contact';

export const routes: Routes = [
 {path: '', redirectTo: 'home', pathMatch: 'full'},
 {path: 'home',component:Home },
 {path: 'profile',component:Profile},
  {path: 'inbox',component:Inbox},
 {path: 'to-do-list',component:ToDoList},
 {path: 'contact',component:Contact},
];
