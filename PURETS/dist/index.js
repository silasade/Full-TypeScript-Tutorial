"use strict";
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
class User {
    constructor(email, name
    //private userId:string
    ) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "ib";
    }
    get getAppleEmail() {
        return `applr ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error;
        }
        this._courseCount = courseNum;
    }
}
const silas = new User("su", "silas");
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
