import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FindMatchesComponent } from './find-matches/find-matches.component';
import { LoginComponent } from './login/login/login.component';
import { MatchMemberComponent } from './match-member/match-member.component';
import { MatchesComponent } from './matches/matches.component';
import { MessagesComponent } from './messages/messages.component';


import { UserViewComponent } from './user-view/user-view.component';
import { UserinfoComponent } from './user/userinfo/userinfo.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'login', component: LoginComponent},
  {path:'dashboard/:id',component:DashboardComponent},
  {path:'userinfo/:id',component:UserinfoComponent},
  {path:'matches/:id',component:MatchesComponent},
  {path:'findmatches/:id',component:FindMatchesComponent},
  {path:'userview/:id',component:UserViewComponent},
  {path:'matchesview/:id',component:MatchMemberComponent},
  {path:'messages/:id/:uid',component:MessagesComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
