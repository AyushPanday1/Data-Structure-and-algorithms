//It is used for searching an element in a sorted array.
//Advantage - Reduce time complexity from linear search to logN.
//Drawback - Array should be sorted.


INPUT:

var arr = [35, 0, -1, 23, 11, -10, 22, 37, 99] ,target = 23;


arr.sort()
let low = 0, high = arr.length - 1;


function binarySearch(arr, target, low, high) {
    let middle = low + parseInt((high - low) / 2);

    if(low<=high){
    if (arr[middle] == target) return middle;

    //Recursive case
    else if (arr[middle] < target) return binarySearch(arr, target, middle + 1, high);
    else return binarySearch(arr, target, low, middle - 1);
    
    }

    return "Not found!"
}

OUTPUT:
console.log(binarySearch(arr, target, low, high));
//100=Not found!
//23=5