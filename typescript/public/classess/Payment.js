//Classes
// class Invoice {
//     readonly client: string;
//     private details: string;
//     public amount: number;
export class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    ;
    format() {
        return `${this.recipient} owed £${this.amount} for ${this.details}`;
    }
}
