import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Message } from './model/message';
import { MessageService } from './service/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
messages!:Message[];
userId:number;
matchId:number;
content:string="XDD"
constructor(private messageService:MessageService, http:HttpClient,private route:Router, private activatedRoute:ActivatedRoute) {
  this.activatedRoute.paramMap.subscribe(p=>{this.userId=parseInt(p.get("uid")!)})
  this.activatedRoute.paramMap.subscribe(p=>{this.matchId=parseInt(p.get("id")!)})
 }

  ngOnInit(): void {
 this.messageService.findMatchMessages(this.matchId).subscribe(data=>{this.messages=data})
  }

  send(content:string){
   console.log(this.content);
   
    this.messageService.send(this.matchId,this.userId,content).subscribe(result =>  this.route.navigate(['/messages/'+this.matchId+'/'+this.userId]));
  }

}
