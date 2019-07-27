import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inventory } from './inventory';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

    constructor(public http:HttpClient) { }

    public getAllInventoryList():Observable<any>
    {
      return this.http.get("http://localhost:7070/TripKitRESTAPI/vendor/allinvenlist");
    }



    public getVendorInventoryList(id:number):Observable<any>
    {
      return this.http.get("http://localhost:7070/TripKitRESTAPI/vendor/invenlist/"+id);
    }
  
    public getInventory(id:number):Observable<any>
    {
      return this.http.get("http://localhost:7070/TripKitRESTAPI/vendor/getinven/"+id);
    }
  
    public updateInventory(inven:Inventory):Observable<any>
    {
      return this.http.post("http://localhost:7070/TripKitRESTAPI/vendor/updateinven",inven);
    }
  
    public addInventory(inven:Inventory):Observable<any>
    {
      return this.http.post("http://localhost:7070/TripKitRESTAPI/vendor/addinven",inven);
    }
  
    public deleteInventory(id:number):Observable<any>
    {
      return this.http.get("http://localhost:7070/TripKitRESTAPI/vendor/deleteinven"+id);
    }

}