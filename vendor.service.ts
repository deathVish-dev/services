import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vendor } from './vendor';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private http:HttpClient) { }

  public getDetails(uname:String,pass:String):Observable<any>
  {
    return this.http.get("http://localhost:7070/TripKitRESTAPI/vendor/getvendor/"+uname+"/"+pass);
  }

  public regVendor(ven:Vendor):Observable<any>
  {
    return this.http.post("http://localhost:7070/TripKitRESTAPI/vendor/regvendor",ven);
  }

  public getMails():Observable<any>
  {
    return this.http.get("http://localhost:7070/TripKitRESTAPI/vendor/getvendormails");
  }
  public getShopId():Observable<any>
  {
    return this.http.get("http://localhost:7070/TripKitRESTAPI/vendor/getvendorshopid");
  }
}
