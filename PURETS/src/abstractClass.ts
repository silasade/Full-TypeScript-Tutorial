abstract class TakePhto{
    constructor(
        public cameraMode:string,
        public filter: string,
    ){}
    abstract getSepia(): void
    
}
class Instagram extends TakePhto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst :number
    ){
        super(cameraMode,filter)
    }
    getSepia():void{
        console.log("Sepia")
    }
}
//const hc= new Instagram("test", "Test")
