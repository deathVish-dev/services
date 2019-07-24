import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(public http:HttpClient) { }

  public getDetails(uname:String,pass:String):Observable<any>
  {
    return this.http.get("http://localhost:7070/TripKitRESTAPI/user/getuser/"+uname+"/"+pass);
  }

  public regUser(cust:Customer):Observable<any>
  {
    return this.http.post("http://localhost:7070/TripKitRESTAPI/user/reguser",cust);
  }

  public getMails():Observable<any>
  {
    return this.http.get("http://localhost:7070/TripKitRESTAPI/user/getusermails/");
  }

}