interface Circle{
    kind: "circle",
    radius: number
}
interface Square{
    kind: "square",
    side: number
}
interface Rectanle{
    kind: "Rectangle",
    length: number,
    width: number,
}
type Shape= Circle | Square | Rectanle

function getTrueShape(shape:Shape){
    if(shape.kind==="circle"){
        return Math.PI * shape.radius ** 2
    }
    //return shape.side * shape.side
}
function getArea(shape: Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius ** 2
            break
        case "square":
            return shape.side * shape.side
            break
        case "Rectangle":
            return shape.length * shape.width
        default:
            const _defaulforshape: never =shape
            return _defaulforshape
    }
}