// // It can be used in case of nested loops to avoid complexity. 
// //T(C)=0(nLogn);  S(C)=0(1)

// Input:
// var arr = [1, 9, 10, 2, 11, 18, 44, 16];
// const target = 27;

// Solution:

// arr.sort()
// let i = 0;
// let j = arr.length - 1;


// function pointer(arr, target) {

//     while (i < j) {
//         if (arr[i] + arr[j] == target) return [arr[i], arr[j]]

//         //Moving to right if addition is smaller
//         else if ((arr[i] + arr[j]) < target) i++;

//         //Moving to the left if addition is greater
//         else j--;
//     }
//     return "Not Found"
// }


// Output:
// console.log(pointer(arr, target));
// //[ 18, 9 ]

// /**========================================================== */


// //Find a pair whose sum is closest to the target.

// Input:
// var Arr = [10, 22, 28, 29, 30, 40];

// const x = 53;
// let ans = []


// function closestSum(arr, x) {

//     let i = 0, j = arr.length - 1;

//     //For storing the indexes of elements.
//     let left = 0, right = 0;

//     //Maximum difference here
//     let maximum = Number.MAX_VALUE;

//     while (i < j) {
//         if (Math.abs(arr[i] + arr[j] - x) < maximum) {
//             left = i
//             right = j
//             maximum = Math.abs(arr[i] + arr[j] - x)

//         }
//         if (arr[i] + arr[j] > x) {
//             j--
//         } else i++;
//     }

//     //Storing the answer in resultant array.
//     ans.push(arr[left], arr[right])

//     return ans;
// }

// console.log(closestSum(Arr, x));


{/**LEETCODE 15: 3SUM */ }

INPUT:

nums = [0,0,0]

function threeSum(nums) {

    let ans = [];

    nums.sort((a, b) => a - b);  //Sorting for makig it easy to add sum equals to zero.

    for (let i = 0; i < nums.length; i++) {
       if(i>0 && nums[i-1]==nums[i]) continue;  //removing duplicates.
        

        let j = i + 1;
        let k = nums.length - 1;


        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];

            if (sum == 0) {
                ans.push([nums[i], nums[j], nums[k]]);
                i++; 

                while (nums[j] === nums[j - 1] && j < k) {  //This loop is for removing the duplicates.
                    j++;
                }

            } else if (sum > 0) {
                k--
            } else j++;
        }
    }

    return ans;
}

console.log(threeSum(nums));

var threeSum = function (nums) {
    // sort for simpler detection of duplicates
    const numbers = nums.sort((a, b) => a - b);

    const triplets = [];
    for (let i = 0; i < numbers.length; i++) {
        // prevent duplicates
        if (i > 0 && numbers[i - 1] === numbers[i]) {
            continue;
        }

        // find sum with 2-pointer method
        let left = i + 1;
        let right = numbers.length - 1;
        while (left < right) {
            const sum = numbers[i] + numbers[left] + numbers[right];
            if (sum === 0) {
                triplets.push([numbers[i], numbers[left], numbers[right]]);
                // shift pointer to a new value to prevent duplicates
                left++;
                while (numbers[left] === numbers[left - 1] && left < right) {
                    left++;
                }
            } else if (sum > 0) {
                right--;
            } else {
                left++;
            }
        }
    }

    return triplets;
};