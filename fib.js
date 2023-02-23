// Fibonacci sequence using iteration
// 0 1 1 2 3 5 8 13 21 34 55
function fib(num) {
    let a = 1;
    let b = 1;
    let array = [0,1,1];
    for (i = 3; i < num; i++) {
        let c = a + b;
        a = b;
        b = c;
        array.push(b);
    }
    return array;
}

console.log(fib(5));

// Fibonacci sequence using recursion
function fibsRec(num) {

    //One liner, also had no idea the spread operator could be used like this.
    //Fun rabbit hole to go down for a few hours
    return num == 1 ? [0] :
        num == 2 ? [0,1] :
        [...fibsRec(num - 1), fibsRec(num - 1)[num - 2] + fibsRec(num - 1)[num - 3]];
}

console.log(fibsRec(10));