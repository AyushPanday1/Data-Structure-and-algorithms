//It is called divide and conquer algorithm.
//It picks any element as pivot and then puts it at its right index.
//Time complexity-0(nlogn)[Avergae case]____0(n^2)[Worst case if pivot is not choosen properly].


//First Method.

Input:

var arr = [3, 0, 2, 5, -1, 4, 1];


Solution:
function quickSort(arr) {

    //Base case
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[0]; // choose the first element as the pivot
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]); // add to the left partition
        } else {
            right.push(arr[i]); // add to the right partition
        }
    }

    //Merging the elements of left and right without concat method.
    return [...quickSort(left), pivot, ...quickSort(right)];

}


Output:
console.log(quickSort(arr));

/**============================================================ */

//Second method.

var arr = [3, 0, 2, 5, -1, 4, 1], n = arr.length;

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j]
    arr[j] = temp
}

//Function that puts smaller elements to the left and greater to the right.

function partition(arr, low, high) {
    let pivotElement = arr[high];

    let i = low - 1;

    for (let j = low; j <= high - 1; j++) {
        if (arr[j] < pivotElement) {
            i++;
            swap(arr, i, j)
        }
    }

    swap(arr, i + 1, high);
    return (i + 1);
}

//Main function to implement quick sort.

function QuickSort(arr, low, high) {
    if (low < high) {
        let element = partition(arr, low, high)
        QuickSort(arr, low, element - 1);
        QuickSort(arr, element + 1, high)
    }
}
Output:

QuickSort(arr, 0, n - 1);
console.log(arr);
