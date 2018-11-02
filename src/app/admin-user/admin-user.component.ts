import { Component, OnInit } from '@angular/core';
import { Profile } from '../models/Profile';

import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AdminService } from '../admin.service';
import { Election } from '../models/Election';
import { Candidate } from '../models/Candidate';
import { Application } from '../models/Application';
import { Party } from '../models/Party';
import { Credentials } from '../models/Credentials';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {
  admin:Profile;
  adminCred:String;
  elections:Election[];
  candidates:Candidate[];
  applications:Application[];
  loggedIn:boolean;
  partys:Party[];
  credentials:Credentials;

  constructor(private router:Router,private route:ActivatedRoute, private adminService:AdminService, private loginService:LoginServiceService) {
      
      
   }

  ngOnInit() {
    this.adminCred=this.route.snapshot.paramMap.get('user');
    this.getElections();
    this.getParty();
    this.loggedIn=true;
    this.hideLogin();
  }
  hideLogin(){
    var login=document.getElementById("login");
    var logout=document.getElementById("logout");
    console.log(this.loggedIn);
    if(this.loggedIn){
      login.style.display="none";
      logout.style.display="block";
    }
    else{
      login.style.display="block";
      logout.style.display="none";
    }

  }
  getElections(){
    this.adminService.getElections().subscribe(data=>{
      this.elections=data;
    });
  }

  getParty(){
    this.adminService.getPartys().subscribe(data=>{
      this.partys=data;
    });
  }
  deleteElection(election:Election){
    console.log(election);
    this.adminService.deleteElection(election.electionID).subscribe(data=>{
      console.log(data);
    });
    this.getElections();  
  }


 getCandidateByElection(ename:HTMLInputElement){
   console.log(ename.value);
  this.adminService.getCandidateByElectionName(ename.value).subscribe(data=>{
    this.candidates=data;
  });
 }

 viewApplicationRequests(){
  this.adminService.getRequests().subscribe(data=>{
    this.applications=data;
  });
 }

 changePassword(pass1:HTMLInputElement,pass2:HTMLInputElement){
   console.log(pass1.value);
   this.getCredentials();
   if(pass1.value==pass2.value){
     this.adminService.changePassword(this.credentials,pass1.value).subscribe(data=>{
       this.credentials=data;
     });
   }
   else{
     alert("Passwords do not match");
   }
 }

 getCredentials(){
   this.adminService.getCredentials(this.adminCred).subscribe(data=>{
    this.credentials=data;
   });

 }

 initiateLogout(){
  this.loginService.requestLogout(this.adminCred).subscribe(data=>{
    console.log(data);
    alert(data);
    this.router.navigate(["/login"]);
  });
 }

}
