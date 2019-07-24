import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  str:String;
  constructor(public http:HttpClient) { }

  
  public storeInCart(cart:Object):Observable<Object>
  {
    console.log(cart);
    this.str="http://localhost:7070/TripKitRESTAPI/user/updatecart";
    return this.http.post(`${this.str}`,cart);
  }

  public selectedProdCart(uid:number,pid:number):Observable<any>
  {
    return this.http.get("http://localhost:7070/TripKitRESTAPI/user/prodcart/"+uid+"/"+pid);
  }

  public allCartItems(uid:number):Observable<any>
  {
    return this.http.get("http://localhost:7070/TripKitRESTAPI/user/getAllCart/"+uid);
  }


}