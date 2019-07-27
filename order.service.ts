import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(public http:HttpClient) { }

  public storeOrder(order:Order):Observable<any>
  {
    return this.http.post("http://localhost:7070/TripKitRESTAPI/user/storeUserOrders/",order);
  }

  public getAllUserOrders(uid:number):Observable<any>
  {
    return this.http.get("http://localhost:7070/TripKitRESTAPI/user/getUserOrders/"+uid);
  }

  public getAllOrders():Observable<any>
  {
    return this.http.get("http://localhost:7070/TripKitRESTAPI/admin");
  }

  public getAllVendorOrders(vid:number):Observable<any>
  {
    return this.http.get("http://localhost:7070/TripKitRESTAPI/user/getVendorOrders/"+vid);
  }

}