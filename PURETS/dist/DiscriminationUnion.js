"use strict";
function getTrueShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    //return shape.side * shape.side
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
            break;
        case "square":
            return shape.side * shape.side;
            break;
        case "Rectangle":
            return shape.length * shape.width;
        default:
            const _defaulforshape = shape;
            return _defaulforshape;
    }
}
