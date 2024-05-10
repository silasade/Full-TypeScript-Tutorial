// use type inference
function addTwo( num:number){
    return num +2
}
addTwo(6)
// passing default values in ts functions

let loginUser=(name:string, email:string, ispaid:boolean=false)=>{
    if (ispaid==void 0){
        ispaid=false
    }
}
loginUser("silas","rww")
//A better way to handle functions e.g a function to only return numbers
function add(num: number) : number{
    return 2324
}
const unction= (num: number):number => {// afunction that receives only number parameters and returns only numbers
    return 2324
}
const heros=["spider","thor", "captain"]
heros.map((hero:string)=>{
    return `hero${hero}`
})
function consoleError(errmsg:string) :void{ // type void means you are not returnin anything
    console.log(errmsg)
}
function handleError(errmsg:string):never{ // never means you are performing a function
    throw new Error(errmsg)
}
export{}