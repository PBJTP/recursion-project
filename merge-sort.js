//Merge sort algorithm using recursion


//accept array as argument

//Find middle of array

//SLICE array in a half, left and right

//continue SLICE array halves until each is only 1

//COMPARISON each piece as they are CONCAT back together

//continue until full array again

function mergeSort(array) {
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);
    return [left, right];
};



console.log(mergeSort([5,3,123,65,789,223,214,5,6,1,67,8,5]));