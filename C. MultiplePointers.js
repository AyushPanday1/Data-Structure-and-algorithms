// It can be used in case of nested loops to avoid complexity. 
//T(C)=0(nLogn);  S(C)=0(1)

Input:
var arr = [1, 9, 10, 2, 11, 18, 44, 16];
const target = 27;

Solution:

arr.sort()
let i = 0;
let j = arr.length - 1;


function pointer(arr, target) {

    while (i < j) {
        if (arr[i] + arr[j] == target) return [arr[i], arr[j]]

        //Moving to right if addition is smaller
        else if ((arr[i] + arr[j]) < target) i++;

        //Moving to the left if addition is greater
        else j--;
    }
    return "Not Found"
}


Output:
console.log(pointer(arr, target));
//[ 18, 9 ]

/**========================================================== */


//Find a pair whose sum is closest to the target.

Input:
var Arr = [10, 22, 28, 29, 30, 40];

const x = 53;
let ans = []


function closestSum(arr, x) {

    let i = 0, j = arr.length - 1;

    //For storing the indexes of elements.
    let left = 0, right = 0;

    //Maximum difference here
    let maximum = Number.MAX_VALUE;

    while (i < j) {
        if (Math.abs(arr[i] + arr[j] - x) < maximum) {
            left = i
            right = j
            maximum = Math.abs(arr[i] + arr[j] - x)

        }
        if (arr[i] + arr[j] > x) {
            j--
        } else i++;
    }

    //Storing the answer in resultant array.
    ans.push(arr[left], arr[right])

    return ans;
}

console.log(closestSum(Arr, x));
//[ 22, 30 ]