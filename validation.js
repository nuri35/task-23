"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inputValidationMiddleware = void 0;
function inputValidationMiddleware(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("Invalid input. The argument must be an array.");
    }
    if (arr.length < 2) {
        throw new Error("Invalid input. The array must have at least two elements.");
    }
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            throw new Error("Invalid input. The array must be sorted in ascending order.");
        }
    }
    return arr;
}
exports.inputValidationMiddleware = inputValidationMiddleware;
