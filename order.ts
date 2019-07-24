import { Customer } from './customer';
import { Product } from './product';
import { Address } from './address';


export class Order {

    constructor(
        public id:number,
        public prod:Product,
        public rent:number,
        public quantity:number,
        public bdate:Date ,
        public rdate:Date ,
        public cust:Customer,
        public addr:Address
    ){}
}
