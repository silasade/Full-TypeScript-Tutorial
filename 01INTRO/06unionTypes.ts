//union is a combination of 2 or more types of types in a single variables
let score : number | string | boolean =23
type User={
    name: string
    id: number
}
type Admin= {
    username: string
    id: number
}
let hitesh : User| Admin={name:"hitesh", id:123}
function getDbId(id: number| string){
    console.log(`My Id is ${id}`)
}
// creating an array with different types

const data: (string | number)[]=[1,2,"3"]
getDbId('11')
//literal type assignment
let seat :"window" | "middle" | "door"