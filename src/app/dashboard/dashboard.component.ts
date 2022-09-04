import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user/model/user';
import { UserService } from '../user/service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
users!:User[];
userId!:number;

  constructor(private route:Router, private userService:UserService,private activatedRoute:ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(p=>{this.userId=parseInt(p.get("id")!)})
   }

  ngOnInit(): void {
    this.userService.findOne(this.userId).subscribe(data=>{this.users=data})
  }

  goInfo(){
    this.route.navigate(['/userinfo/'+this.userId]);
  }

  goMatches(){
    this.route.navigate(['/matchesview/'+this.userId]);
  }

  goFindMatches(){
    this.route.navigate(['/findmatches'+'/'+this.userId]);
  }

}
