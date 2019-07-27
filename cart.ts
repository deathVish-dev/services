import { Product } from './product';
import { Customer } from './customer';
import { Inventory } from './inventory';

export class Cart {

    constructor(public id?:number,
        public quantity?:number,
        public cust?:Customer,
        public inven?:Inventory)
        { }
    
}