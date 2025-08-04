/**
* @param {number[]} numbers
* @param {number} target
* @return {number[]}
*/


function twoSum(numbers: number[], target: number): number[] | undefined {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                return [i+1, j+1];
            }
        }
    }
    return undefined;
}
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 3, 4], 6));
console.log(twoSum([4, 11, 17, 25], 21));
console.log(twoSum([0, 1, 2, 2, 3, 5], 4));
console.log(twoSum([-1, 0], -1));
console.log(twoSum([4, 11, 17, 25], 29));