//It is a sorting algorithm that is used in sorting arrays effectively.
//It is easy to understand and it does not require any extra memory usage.
//It's time complexity is O(n^2)


Input:
var array = [3, 8, 9, 1, 3, 0, 2, 5, 4];

Solution:

function BubbleSort(arr) {
    let swap = false;

    while (!swap) {
        swap = true;

        //Start with 1 cause we have to compare 0th index too.
        for (let i = 1; i < arr.length; i++) {
            if (arr[i - 1] > arr[i]) {
                swap = false;

                //If greater then swap it with smaller element.
                let temp = arr[i - 1];
                arr[i - 1] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr
}


Output:
console.log(BubbleSort(array));

//[0,1,2,3,3,4,5,8,9]