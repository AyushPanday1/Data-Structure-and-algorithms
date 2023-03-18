//It is used mostly to find an sub-array or sub-string with specific conditions.
//Array, String, Sub Array, Sub String, Largest Sum, Maximum Sum, Minimum Sum

Input:
var arr = [1, 4, 2, 10, 2, 3, 1, 0];
const k = 3;

// Here we have to find sum of sub-array of 4 numbers which is maximum then other sub-arrays.

function slidingWindow(arr, k) {
    //It will store the sum and maximum total.
    let sum = 0;
    let max = 0;

    //Firstly iterate upto k and add first k numbers.
    for (let i = 0; i < k; i++) {
        sum += arr[i];
        max = sum;
    }

    //Iterate from k to last and subtract the previous numbers and add new numbers sub-sequentially.
    for (let i = k; i < arr.length; i++) {
        sum += arr[i];
        sum -= arr[i - k]

        if (sum > max) {
            max = sum;
        }
    }

    return max;
}


Output:
console.log(slidingWindow(arr, k));
//Ans:16