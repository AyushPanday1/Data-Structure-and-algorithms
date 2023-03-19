//Recursion basically means repeated application.
//It is used to solve a programme effictively.


//Find factorial of N.

INPUT:
var N = 5;


function factorial(N) {
    if (N <= 1) return N;                            //Base case.

    return N * factorial(N - 1)                       //Recursive case.
}


OUTPUT:
console.log(factorial(N));


/**================================================== */


//Find product of arr.

INPUT:

var arr = [2, 5, 1, -2, 8, 8];

function productArr(arr) {
    if (arr.length === 0) return 1                     //Base case

    return arr[0] * productArr(arr.slice(1))          //Recusrive case
}


OUTPUT:

console.log(productArr(arr));

//-1280


/**===================================================== */


//Find fibbanacci number.

INPUT:

var N = 5;

function fibbanacci(N) {
    if (N <= 1) return 1;

    return fibbanacci(N - 1) + fibbanacci(N - 2)
}

OUTPUT:

console.log(fibbanacci(N));
//8


/**=================================================== */

//Reverse a string.

INPUT:

var str = 'string';

function reverse(str) {
    if (str.length === 0) return str;

    return reverse(str.slice(1)) + str[0]
}


OUTPUT:

console.log(reverse(str));
//gnirts


/**======================================================= */

//check Palidrome using recursion.

INPUT:
var str = 'madam';

function Palidrome(str) {
    if (str.length === 0) return true;

    return (str[0] === str.slice(-1)) && Palidrome(str.slice(1, -1))
}


OUTPUT:
console.log(Palidrome(str));
//false;