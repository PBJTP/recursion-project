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

console.log(fib(77));
// Fibonacci sequence using recursion

function fibsRec(num) {
    
}