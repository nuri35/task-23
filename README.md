# task-23

<!-- README.md -->
 

The `sumZero` function is a TypeScript function used to find the first pair in a sorted array whose sum is zero.

## Usage

```typescript
import { sumZero } from './sumZero';

const arr = [-4, -3, -2, -1, 0, 1, 2, 3, 10];
const result = sumZero(arr);
console.log(result); // [-3, 3]

```
- The sumZero function takes a sorted array of integers as input and searches for the first pair whose sum is zero. If such a pair is found, it returns an array containing the pair. If no such pair is found, it returns undefined

## Validations
- The sumZero function validates the input array to ensure that it is array length is greater than 1. If the array length is less than 2, the function returns error. The function also validates the input array to ensure that it is sorted in ascending order. If the array is not sorted, the function returns error.

## Complexity Analysis
- The sumZero function has a time complexity of O(N) and a space complexity of O(1), where N represents the number of elements in the array. The function uses two pointers (left and right) to search for the pair in a sorted manner, gradually converging the pointers.


## Contributions
- Contributions are welcome! If you would like to contribute, please visit the GitHub repository and submit a pull request. Enhancements and feedback are always appreciated.

## License
- This project is licensed under the MIT License - see the LICENSE.md file for details