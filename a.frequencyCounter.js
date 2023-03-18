// It can be used to count frequency of any element in array or string.

Input:
arr = [2, 9, 4, 6, 11, 3, 2, 9, 4, 6, 6]

Solution:
//Using Map.

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
//Map(6) { 2 => 2, 9 => 2, 4 => 2, 6 => 3, 11 => 1, 3 => 1 }


map.forEach((key, value) => { console.log("The value of " + value + " is " + key); })
/**The value of 2 is 2
The value of 9 is 2
The value of 4 is 2
The value of 6 is 3
The value of 11 is 1
The value of 3 is 1 */



// Using Object (Object returns the data in ascending format).
let obj = {};

for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = (obj[arr[i]] || 0) + 1;
}

Output:
console.log(obj);
//{ '2': 2, '3': 1, '4': 2, '6': 3, '9': 2, '11': 1 }



//T(C)=0(n);
//S(C)=0(n)