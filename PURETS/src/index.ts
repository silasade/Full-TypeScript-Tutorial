/*
class User {
    email: string
    name: string
    constructor(email:string,name: string){
        this.email=email
        this.name=name
    }
}
const silas =new User("su", "silas") */

class User{
    protected _courseCount=1
    readonly city : string ="ib"
    constructor (
        public email: string,
        public name: string
        //private userId:string
    ){
    }
    get getAppleEmail():string{
            return `applr ${this.email}`
    }
    get courseCount(): number{
        return this._courseCount
    }
    set courseCount(courseNum){
        if(courseNum<= 1){
            throw new Error
        }
        this._courseCount=courseNum
    }
}
const silas =new User("su", "silas")

class SubUser extends User{
    isFamily: boolean=true
    changeCourseCount(){
        this._courseCount=4
    }
}