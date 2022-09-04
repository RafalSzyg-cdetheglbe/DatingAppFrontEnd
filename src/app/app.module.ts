import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule}from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecurityComponent } from './security/security.component';
import { LoginComponent } from './login/login/login.component';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatchesComponent } from './matches/matches.component';
import { UserinfoComponent } from './user/userinfo/userinfo.component';
import { FindMatchesComponent } from './find-matches/find-matches.component';
import { UserViewComponent } from './user-view/user-view.component';
import { ConversationComponent } from './conversation/conversation.component';
import { MatchMemberComponent } from './match-member/match-member.component';
import { MessagesComponent } from './messages/messages.component';




@NgModule({
  declarations: [
    AppComponent,
   SecurityComponent,
   LoginComponent,
   DashboardComponent,
   MatchesComponent,
   UserinfoComponent,
   FindMatchesComponent,
   UserViewComponent,
   ConversationComponent,
   MatchMemberComponent,
   MessagesComponent,
 
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
