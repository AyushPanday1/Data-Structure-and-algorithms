//It is used when the quantity of elements is comparatively low.
//Time complexity-0(n^2)
//Space complexity-0(n)


INPUT:

var array = [12, 43, 87, 56, 89, 14];

SOLUTION:

function insertionSort(arr) {

    //Start with 1 as we have to compare 0th index also.
    for (let i = 1; i < arr.length; i++) {
        let currentElement = arr[i];

        let j = i - 1;

        //Making the forwarded index to previous position.
        while (j > -1 && currentElement < arr[j]) {
            arr[j + 1] = arr[j];
            j--
        }

        arr[j + 1] = currentElement
    }

    return arr

}


OUTPUT:

insertionSort(array);
console.log(array);
//[ 12, 14, 43, 56, 87, 89 ]