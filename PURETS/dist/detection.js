"use strict";
function detectType(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}
function provideId(id) {
    if (!id) {
        console.log("Please provide your id");
    }
    id === null || id === void 0 ? void 0 : id.toLowerCase();
}
