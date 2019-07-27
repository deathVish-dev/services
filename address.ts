import { Customer } from './customer';

export class Address {

    constructor(
        public id?:number,
        public addressLine1?:String,
public addressLine2?:String,
public city?:String,
public state?:String,
public postalCode?:number,
public cust?:Customer
){}
    }