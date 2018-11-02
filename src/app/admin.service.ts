import { Injectable } from '@angular/core';
import { Election } from './models/Election';
import { HttpClient } from '@angular/common/http';
import { Candidate } from './models/Candidate';
import { Application } from './models/Application';
import { Party } from './models/Party';
import { Credentials } from './models/Credentials';
import { ResponseType } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private url:String="/admin";
  private otherUrl:String="/user";
  constructor(private http:HttpClient) { }

  sendElection(election:Election){
    return this.http.post(this.url+"/addElection",election,{responseType:'text'});
  }

  getElections(){
    return this.http.get<Election[]>(this.url+"/viewAllElections");
  }

  deleteElection(ele:String){
    console.log("EID " +ele);
    return this.http.delete(this.url+"/deleteElection/"+ele);
  }

  addCandidate(candidate:Candidate){
    return this.http.post(this.url+"/addCandidate",candidate,{responseType:'text'});
  }

  getCandidateByElectionName(ename:String){
    return this.http.get<Candidate[]>(this.url+"/viewCandidatesByElection/"+ename);
  }

  getRequests(){
    return this.http.get<Application[]>(this.url+"/getPendingApplications");
  }
  
  addParty(party:Party){
    return this.http.post(this.url+"/addParty",party,{responseType:'text'});
  }

  getPartys(){
    return this.http.get<Party[]>(this.url+"/viewAllPartys");
  }

  changePassword(credential:Credentials,pass:String){
    return this.http.put<Credentials>(this.otherUrl+"/changePassword/"+pass,credential);
  }

  getCredentials(creID:String){
    return this.http.get<Credentials>(this.otherUrl+"/getCredentials/"+creID);
  }
}
