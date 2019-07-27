import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cart } from './cart';
import { Customer } from './customer';
import { Address } from './address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(public http:HttpClient) { }

  
  
  public getAddress(id:number):Observable<any>
  {
      console.log("ID in Service"+id)
    return this.http.get("http://localhost:7070/TripKitRESTAPI/user/getaddr/"+id);
  }

  public addAddress(addr:Address):Observable<Object>
  {
    return this.http.post("http://localhost:7070/TripKitRESTAPI/user/addaddr",addr);
  }

  public updateAddress(addr:Address):Observable<Object>
  {
    return this.http.post("http://localhost:7070/TripKitRESTAPI/user/updateaddr",addr);
  }


}