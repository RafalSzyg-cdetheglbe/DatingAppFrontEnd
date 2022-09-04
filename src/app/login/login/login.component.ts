import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

////////////////////////  
userId:number=5;
////////////////////////

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  onButtonClick(){ 
    this.route.navigate(['/dashboard/'+this.userId]);
  }
}
