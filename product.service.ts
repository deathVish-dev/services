import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http:HttpClient) { }

  public getAllProduct():Observable<any>
  {
    return this.http.get("http://localhost:7070/TripKitRESTAPI/user/products");
  }

  public getProduct(id:number):Observable<any>
  {
    return this.http.get("http://localhost:7070/TripKitRESTAPI/user/products/"+id);
  }

  public updateProduct(prod:Product):Observable<any>
  {
    return this.http.post("http://localhost:7070/TripKitRESTAPI/admin/updateProduct",prod);
  }

  public addProduct(prod:Product):Observable<any>
  {
    return this.http.post("http://localhost:7070/TripKitRESTAPI/admin/addProduct",prod);
  }

  public deleteProduct(id:number):Observable<any>
  {
    return this.http.get("http://localhost:7070/TripKitRESTAPI/admin/deleteProduct/"+id);
  }

}
