import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http:HttpClient) { }

  public getDetails(uname:String,pass:String):Observable<any>
  {
    return this.http.get("http://localhost:7070/TripKitRESTAPI/login/logindtls/"+uname+"/"+pass);
  }

}

