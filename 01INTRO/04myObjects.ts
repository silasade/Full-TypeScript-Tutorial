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

//type Aliases 
/* type User={
    name: string;
    email: string;
    isActive:boolean
}
function createUser(user:User){

} 
createUser({name:"",email:"", isActive:true})*/
type User={
    readonly _id: string // _id can not be modified after is has been modified first
    name: string;
    email: string;
    isActive: boolean
    credcardDetails?:number //for properties that are optional
}
let myUser: User={
    _id: "1234",
    name:"Wed",
    email: "dknjdf",
    isActive:false
}

type cardNumber={
    cardnumber: string
}
type cardDate={
    cardDate:string
}
type cardDetails= cardNumber & cardDate &{
    cvv:number
} //combining aliases objects or extending aliases
let card :cardDetails={
    cardnumber:"ABCDEF",
    cardDate:"2023-5-1",
    cvv:123
}
const keys=Object.keys(card)
const items=keys.map(item => {
    console.log( `${item} is ${card[item]}`)
})

export{}