// write function calculte the factorial of a number in javascript
function factorial(n) {
    if(n<0){
        return "Undefined for negative numbers";
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n*factorial(n-1);
}
console.log(factorial(5));  // Output: 120