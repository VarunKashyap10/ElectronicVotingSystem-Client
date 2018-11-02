import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Credentials}  from './models/Credentials';
import {Profile} from './models/Profile';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private url:String="/user";
  constructor(private http:HttpClient) { }

  public requestLogin(user:Credentials){
    return this.http.post<Credentials>(this.url+"/login",user);
  }

  public requestRegister(profile:Profile){
    return this.http.post(this.url+"/register",profile,{responseType:'text'});
  }

  public requestLogout(userid:String){
    return this.http.get(this.url+"/logout/"+userid,{responseType:'text'});
  }
}
