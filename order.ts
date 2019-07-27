import { Customer } from './customer';
import { Address } from './address';
import { Inventory } from './inventory';
import { CardDetails } from './cardDetails';


export class Order {

    constructor(
        public id?:number,
        public inven?:Inventory,
        public rent?:number,
        public quantity?:number,
        public bdate?:Date ,
        public rdate?:Date ,
        public cust?:Customer,
        public addr?:Address,
        public card?:CardDetails
    ){}
}