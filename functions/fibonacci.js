// fibonacci
const fib = x => {
    if (x <=2 ) return 1;
    return fib(x-1) + fib(x-2);
}

/* 50 takes a really long time over a minute
// time O(n2)
// space O(n)
*/
// console.log(fib(2));
// console.log(fib(5));
// console.log(fib(50));

// introduce memoization
// instantiate an empty object when calling function
const fibMemo = (n, memo = {}) => {
    if(n in memo) return memo[n];
    if(n <=2) return 1;
    memo[n] = fibMemo(n-1, memo) + fibMemo(n-2, memo); 
    return memo[n];
}

console.log(fibMemo(5));
console.log(fibMemo(10));
console.log(fibMemo(50));
console.log(fibMemo(75));