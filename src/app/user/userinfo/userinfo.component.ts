import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {

  users!:User[];
  userId!:number;
  
    constructor(private route:Router, private userService:UserService,private activatedRoute:ActivatedRoute) {
      this.activatedRoute.paramMap.subscribe(p=>{this.userId=parseInt(p.get("id")!)})
     }

  ngOnInit(): void {
    this.userService.findOne(this.userId).subscribe(data=>{this.users=data})
  }

}
