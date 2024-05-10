const score: Array<number>=[]
const names: Array<string>=[]

function identityOne(val: boolean | number){
    return val
}
function identityTwo(val: any):any{
    return val
}
function identityThree<Type>(val :Type): Type{
    return val
}
function identityFour<T>(val:T):T{
    return val
}
interface Botle{
    brand: string,
    type: number
}
//identityFour<Botle>({brand:"water",type:1})

function getSearchProducts<T>(products: T[]):T{
    return products[1]
}

const getMoreSearchProducts=<T,>(product :T[]):T=>{
    const myIndex=4
    return product[myIndex]
}
interface Database{
    connection: string,
    username: string,
    password: string
}
function anotherfunction<T,U extends Database>(valOne:T, valTwo:U):object{
    return{
        valOne,
        valTwo
    }
}
//anotherfunction(3,{connection:"D",username:"d",password:"q"})

interface Quiz{
    name: string,
    type: string
}
interface Course{
    name: string,
    author: string,
    subject: string
}
class Sellable<T>{
    public cart: T[]=[]
    addToCart(products:T){
        this.cart.push(products)
    }
}