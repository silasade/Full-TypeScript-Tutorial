//syntax
interface User {
    readonly dbId:number //can't be modified after it has been declared
    email: string,
    userId: number,
    googleId?: string,
    startTrial():string,
    getCoupon(couponname:string, value:number):number
}

const silas : User={
    dbId:123,
    email: "Silasadegoke@gmail.com", 
    userId:123,
    startTrial: ()=>{
        return "trial started"
    },
    getCoupon:(name: "silas12", off: 10)=>{
        return 12
    }
}

// reopening the interfaces(Basically just adding things to it)
interface User{
    githubToken:string
}
//inheritance- another interface can inherits the properties from another interface
interface Admin extends User{
    role: "admin" | "ta" | "learner"
}