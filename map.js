// 2.Write a JavaScript function using ES6 syntax that takes an array of numbers as input and returns a new array where each number is squared.Ensure that your function handles an empty array gracefully by returning an empty array in such cases.Example: if the input is`[1, 2, 3, 4]`, the output should be`[1, 4, 9, 16]`.

// normal function
function multipleNumbers(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        
        return []
    }
    const totalMultiple = numbers.map(num => num ** 2);
    return totalMultiple;
}

const result = multipleNumbers([10, 20, 30, 40])
// console.log(result);

// arrow function
const handleMultiple = (numbers) => numbers.map(num => num ** 2);

const num = handleMultiple([1, 2, 3, 4,])
// console.log(num);

// arrow function details
const numberHandle = (nums) => {
    if (!Array.isArray(nums) || nums === 0) {
        return [];
    };
    const total = nums.map(num => num ** 2);
    return total;
};

const resultNum = numberHandle([1, 2, 3, 4,]);
// console.log(resultNum);