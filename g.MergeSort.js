//It is One of the most efficient sorting algorithms.
//Applicable for large datasets but slower for smaller ones.
//Time complexity-0(nLogn);

INPUT:

var arr = [19, 2, 8, 3, 7, 4, 6, 5];



// Function to perform merge operation.
function merge(arr, l, m, r) {
    let n1 = m - l + 1;
    let n2 = r - m;

    let left = [];                          //For left arr, i,e. arr[i]
    let right = [];                         //For right arr, i,e. arr[j]

    for (let i = 0; i < n1; i++) {
        left[i] = arr[l + i]                //Filling left arr with left+i
    }

    for (let j = 0; j < n2; j++) {
        right[j] = arr[m + 1 + j]           //Filling right arr from middle to right most
    }

    let i = 0, j = 0;
    let k = l;

    while (i < n1 && j < n2) {
        if (left[i] <= right[j]) {          //Smaller ones to arr[k]
            arr[k] = left[i];
            i++;
        } else {
            arr[k] = right[j];
            j++
        }
        k++;
    }

    while (i < n1) {                       //Loops for maintaining arr[k] and left[i].
        arr[k] = left[i];
        i++;
        k++;
    }

    while (j < n2) {                      //Loops for maintaining arr[k] and right[i].
        arr[k] = right[j];
        j++;
        k++;
    }

}


//Function to merge all data firstly upto middle then from mid to right.
function mergeSort(arr, l, r) {
    if (l >= r) return;

    let m = l + parseInt((r - l) / 2);
    mergeSort(arr, l, m);
    mergeSort(arr, m + 1, r);

    merge(arr, l, m, r)                  //Passing arguments in above function.
}



OUTPUT:
mergeSort(arr, 0, arr.length - 1);
console.log(arr);

//[2,3,4,5,6,7,8,19]