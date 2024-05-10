"use strict";
class TakePhto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
}
class Instagram extends TakePhto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Sepia");
    }
}
//const hc= new Instagram("test", "Test")
