"use strict";
/* const User={
    name: "Silas",
    email: "silasadegoke",
    isActive: false
}
function createUser({name:string, isPaid:boolean}){

}
function createcourse():{name:string, price:number}{
    return {name:"silas", price:122}
} */
Object.defineProperty(exports, "__esModule", { value: true });
var myUser = {
    _id: "1234",
    name: "Wed",
    email: "dknjdf",
    isActive: false
};
var card = {
    cardnumber: "ABCDEF",
    cardDate: "2023-5-1",
    cvv: 123
};
var keys = Object.keys(card);
var items = keys.map(function (item) {
    console.log("".concat(item, " is ").concat(card[item]));
});
