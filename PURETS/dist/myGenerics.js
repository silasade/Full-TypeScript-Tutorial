"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
function identityFour(val) {
    return val;
}
//identityFour<Botle>({brand:"water",type:1})
function getSearchProducts(products) {
    return products[1];
}
const getMoreSearchProducts = (product) => {
    const myIndex = 4;
    return product[myIndex];
};
function anotherfunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(products) {
        this.cart.push(products);
    }
}
