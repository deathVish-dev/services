import { Product } from './product';
import { Vendor } from './vendor';

export class Inventory {

    constructor(public id?:number, 
        public prod?:Product,
        public quantity?:number,
        public ven?:Vendor,
        public rent?:number)
        { }
    
}