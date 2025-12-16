//fibonacci using recursion **Fibonacci is a sequence of numbers where each number is the sum of the previous two numbers.**

function fibonacci(n) {
    if (n <= 0) {
        return  0;
    }
    if (n === 1) {
        return 1;
    }
    return fibonacci(n-1)+fibonacci(n-2);

}
console.log(fibonacci(6));  // Output: 8
// expamle fibonacci series: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
// explle of 6th term is 8 how ? 0,1,1,2,3,5,8 (0 is 0th term, 1 is 1st term, 1 is 2nd term, 2 is 3rd term, 3 is 4th term, 5 is 5th term, 8 is 6th term)



// | n | Fibonacci value   |
// | - | ----------------- |
// | 0 | 0                 |
// | 1 | 1                 |
// | 2 | 1  → `0 + 1`      |
// | 3 | 2  → `1 + 1`      |
// | 4 | 3  → `1 + 2`      |
// | 5 | 5  → `2 + 3`      |
// | 6 | **8** → `3 + 5`  |
