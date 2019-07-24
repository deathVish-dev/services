import { Product } from './product';
import { Customer } from './customer';

export class Cart {

    constructor(public id:number, 
        public prod:Product,
        public quantity:number,
        public cust:Customer)
        { }
    
}