// It can be used in case of nested loops to avoid complexity. 

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
console.log(pointer(arr,target));
//[ 18, 9 ]


//T(C)=0(nLogn);
//S(C)=0(1)