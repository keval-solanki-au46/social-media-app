// Take an integer array(length >10) as input from the user, and extract
// numbers from index 2 to 8 into a new array, using inbuilt function.
// Elements should not be removed from the original array.


var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var newArr = [];


function extract(arr) {
    for (var i = 2; i <= 8; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}


console.log(extract(arr));
console.log(arr);


// Output:
// [3, 4, 5, 6, 7, 8]