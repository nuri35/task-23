"use strict";
/**
* @dev Write a function called sumZero which accepts a sorted array
*      of integers. The function should find the first pair where the
*      sum is 0.Return an array that includes both values that sum
*      to zero or undefined if a pair does not exit.
       Should have: Input validation
*      Nice to have: Big O Notation O(N).
* @param {Array<number>} array
* @returns {Array<number> | undefined}
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// SOLUTION
const validation_1 = require("./validation");
const colors_1 = __importDefault(require("colors"));
function sumZero(arr) {
    // Middleware input validation
    try {
        const validatedArr = (0, validation_1.inputValidationMiddleware)(arr);
        const n = validatedArr.length;
        let left = 0;
        let right = n - 1;
        while (left < right) {
            const sum = validatedArr[left] + validatedArr[right];
            if (sum === 0) {
                return [validatedArr[left], validatedArr[right]];
            }
            else if (sum > 0) {
                right--;
            }
            else {
                left++;
            }
        }
        return undefined;
    }
    catch (error) {
        console.log(colors_1.default.red(error.message));
        return null;
    }
}
// TESTS CASES and choose one of them
const arr = [-2, 0, 1, 3]; // undefined
const arrOther = [-4, -3, -2, -1, 0, 1, 2, 5]; // [-2, 2]
const arrOther2 = [-4, -3, -2, -1, 0, 5, 10]; // undefined
const arrOther3 = [-3, -2, -1, 0, 1, 2, 3]; // [-3, 3]
const arrOther4 = [11, -2, -1, 0, 1, 2, 5]; //  give me an error
const result = sumZero(arrOther4);
if (result !== undefined && result !== null) {
    console.log(colors_1.default.green(`Pair found: ${result[0]}, ${result[1]}`));
}
else if (result === undefined) {
    console.log(colors_1.default.yellow("No pair found. that is undefined"));
}
else if (result === null) {
    console.log(colors_1.default.red("Please check the input array. "));
}
// EXPLANATION OF THE SOLUTION and Big O Notation O(N)
// The function sumZero receives an array of numbers and returns the first pair of numbers that sum to zero.
// The function uses two pointers, one at the beginning of the array and the other at the end of the array.
// The pointers move towards each other until they meet or until the sum of the two numbers is zero.
// If the sum is zero, the function returns the pair of numbers. If the sum is greater than zero, the right pointer moves one position to the left.
// If the sum is less than zero, the left pointer moves one position to the right.
// If the pointers meet and the sum is not zero, the function returns undefined.
// The function uses the inputValidationMiddleware function to validate the input array.
// The function uses a try/catch block to catch any errors thrown by the inputValidationMiddleware function.
// If the input array is invalid, the function returns null.
// The function uses the inputValidationMiddleware function to validate the input array.
