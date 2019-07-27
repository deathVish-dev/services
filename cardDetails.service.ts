import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cart } from './cart';
import { Customer } from './customer';
import { CardDetails } from './cardDetails';

@Injectable({
  providedIn: 'root'
})
export class CardDetailService {

  str:String;
  constructor(public http:HttpClient) { }

  
  public addCard(card:CardDetails):Observable<Object>
  {
    return this.http.post("http://localhost:7070/TripKitRESTAPI/user/addcard",card);
  }

  public storeInCart(cart:Cart):Observable<Object>
  {
    console.log("In Service");
    return this.http.post("http://localhost:7070/TripKitRESTAPI/user/addtocart",cart);
  }

  public selectedProdCart(uid:number,iid:number):Observable<any>
  {
    return this.http.get("http://localhost:7070/TripKitRESTAPI/user/prodcart/"+uid+"/"+iid);
  }

  public allCartItems(uid:number):Observable<any>
  {
    return this.http.get("http://localhost:7070/TripKitRESTAPI/user/getAllCart/"+uid);
  }


}