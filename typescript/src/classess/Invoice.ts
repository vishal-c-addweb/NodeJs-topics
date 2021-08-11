//Classes
// class Invoice {
//     readonly client: string;
//     private details: string;
//     public amount: number;

//     constructor(c: string, d: string, a: number){
//        this.client = c;
//        this.details = d;
//        this.amount = a; 
//     };

//     format() {
//         return `${this.client} owes £${this.amount} for ${this.details}`;  
//     }
// }

import { HasFormatter } from "../interface/HasFormatter.js";

export class Invoice implements HasFormatter{
    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ){};

    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;  
    }
}