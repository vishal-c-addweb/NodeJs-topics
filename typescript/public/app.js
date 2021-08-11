// const anchor = document.querySelector('a')!;
// without(!)
// if (anchor) {
//     console.log(anchor.href);
// }
//or
// console.log(anchor.href);
// const form = document.querySelector('form')!;
// interface IsPerson {
//     name: string;
//     age: number;
//     speak(a: string): void;
//     spend(a: number): number;
// }
// const me: IsPerson = {
//     name: 'vk',
//     age: 23,
//     speak(text: string): void {
//         console.log(text);
//     },
//     spend(amount: number): number {
//         console.log('i spent',amount);
//         return amount;
//     }
// };
// const greetPerson = (person: IsPerson) => {
//     console.log('hello',person.name);
// }
// greetPerson(me);
import { Invoice } from './classess/Invoice.js';
import { Payment } from './classess/Payment.js';
import { ListTemplate } from './classess/ListTemplate.js';
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice('vk','web project',200);
// docTwo = new Payment('vishal','Drupal project',400);
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);
// const invOne = new Invoice('vishal','work on Addweb site',350);
// const invTwo = new Invoice('vk','work on Plugins',250);
// let invoice: Invoice[] = [];
// invoice.push(invOne);
// invoice.push(invTwo);
// invoice.forEach(inv => {
//     console.log(inv.client , inv.amount, inv.format());
// });
//Dom & Type Casting
const form = document.querySelector('.new-item-form');
// console.log(form.children);
//inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    let values;
    values = [toFrom.value, details.value, amount.valueAsNumber];
    if (type.value == 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
    // console.log(
    //     type.value,
    //     toFrom.value,
    //     details.value,
    //     amount.valueAsNumber,
    // );
});
// ---------------------------------------------------------------------
// //Generics
// const addUID = <T extends {name: string}>(obj: T) => {
//     let uid = Math.floor(Math.random() * 100);
//     return {...obj, uid}
// }
// let docOne = addUID({name: 'vk',age: 23})
// console.log(docOne);
// //with Interface
// interface Resource<T> {
//     uid: number;
//     resourceName: string;
//     data: T;
// }
// const docThree: Resource<object> = {
//     uid: 1,
//     resourceName: 'person',
//     data: { name:'vk'}
// }
// console.log(docThree);
// ---------------------------------------------------------------------
// //Enums
// enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }
// //with Interface
// interface Resource<T> {
//     uid: number;
//     resourceName: number;
//     data: T;
// }
// const docThree: Resource<object> = {
//     uid: 1,
//     resourceName: ResourceType.BOOK,
//     data: { name:'vk'}
// }
// console.log(docThree);
// ---------------------------------------------------------------------
// // tuples
// let tuple: [string, number, boolean] = ['vk',21,true];
// // we can't change pos of any type.
// ---------------------------------------------------------------------
