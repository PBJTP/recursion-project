//Merge sort algorithm using recursion


//accept array as argument

//Find middle of array

//SLICE array in a half, left and right

//continue SLICE array halves until each is only 1

//COMPARISON each piece as they are CONCAT back together. Ended up using a spread here instead of concat

//continue until fullly sorted array

function mergeSort(array) {
    //base case
    if (array.length < 2) return array;

    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);
    
    //recursion
    return merge(mergeSort(left), mergeSort(right));
};

function merge(left, right) {
    let sortedArray = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            sortedArray.push(left.shift());
        } else {
            sortedArray.push(right.shift());
        }
    };

    return [...sortedArray, ...left, ...right];
}



console.log(mergeSort([5,3,123,65,789,223,214,5,6,1,67,8,5]));