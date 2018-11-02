import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from 'selenium-webdriver/http';

@Component({
  selector: 'app-normal-user',
  templateUrl: './normal-user.component.html',
  styleUrls: ['./normal-user.component.css']
})
export class NormalUserComponent implements OnInit {
  userID:String;
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.userID=this.route.snapshot.paramMap.get('user');
  }

  getUserName(){
    
  }

}
