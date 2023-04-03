/*It can be used to count frequency of any element in array or string.
T(C)=0(n); S(C)=0(n)*/

Input:
arr = [2, 9, 4, 6, 11, 3, 2, 9, 4, 6, 6]

Solution:

//Using Map

var map = new Map();

for (let i = 0; i < arr.length; i++) {
    let element = arr[i];

    if (map.has(element)) {
        map.set(element, map.get(element) + 1)
    } else {
        map.set(element, 1)
    }
}

Output:
console.log(map);
/*Map(6) { 2 => 2, 9 => 2, 4 => 2, 6 => 3, 11 => 1, 3 => 1 }*/



/*Using Object (Object returns the data in ascending format).*/

var obj = {};

for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = (obj[arr[i]] || 0) + 1;
}

Output:

console.log(obj);
{/* '2': 2, '3': 1, '4': 2, '6': 3, '9': 2, '11': 1*/ }



//================================================================\\


{/*MINIMUM CHARACTERS TO BE REPLACED IN GIVEN STRING TO MAKE ALL CHARACTERS SAME. */ }

INPUT:

var str = 'datastructuresandalgorihms';

function countfrequency(str) {
    let obj = {};

    for (let i = 0; i < str.length; i++) {
        obj[str[i]] = (obj[str[i]] || 0) + 1;
    }

    let max = 0;
    let ans = ''

    for (let char in obj) {
        if (obj[char] > max) {
            max = obj[char];
            ans = char;
        }
    }

    return str.length - max;
}

OUTPUT:

console.log(countfrequency(str));

// /*Here total chracters are 26 in string and if we remove 4 letters of 'a', 
// that is most frequent chracter so answer would be 22.*/


//==================================================================*


{/*COUNT THE NUMBER OF UNIQUE CHARACTERS IN A AGIVEN STRING. */ }

INPUT:

var str = 'geeksforgeeks';


function uniqueCharacters(str) {

    let obj = {};

    for (let i = 0; i < str.length; i++) {
        obj[str[i]] = (obj[str[i]] || 0) + 1;
    }

    var size = Object.keys(obj).length;

    return size;
}

OUTPUT:

console.log(uniqueCharacters(str));    //7



// /*=================================================================== */

{/*LEETCODE.347= RETURN TOP K FREQUENT ELEMENTS FROM ARRAY. */ }

var nums = [1, 1, 1, 2, 2, 3], k = 2;

var topKFrequent = function (nums, k) {
    let obj = {}
    let arr = []
    let ans = []
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]]) {
            obj[nums[i]] += 1
        } else {
            obj[nums[i]] = 1
        }
    }
    for (let el in obj) {
        arr.push([el, obj[el]])
    }

    arr = arr.sort((a, b) => b[1] - a[1])

    for (let j = 0; j < k; j++) {
        ans.push(parseInt(arr[j][0]))
    }
    return ans

};

console.log(topKFrequent(nums, k));



{/*LEETCODE 136: SINGLE NUMBER */}

INPUT:

nums = [2,2,1];

var singleNumber = function (nums) {

    let obj = {};

    for (let i = 0; i < nums.length; i++) {
        obj[nums[i]] = obj[nums[i]] ? obj[nums[i]] + 1 : 1
    }

    for(let key in obj){
        if(obj[key]==1){
            return key
        }
    }
};