const fibonacci = function (number1) {
    if(number1 <0)
    return "OOPS";
    let num = parseInt(number1);
    
    if (number1 === 1 || number1 === 2)
        return 1;
    let fib = []; 

    fib[0] = 0;
    fib[1] = 1;
    for (let i = 2; i <= number1; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
    }
    return fib[number1];
};

// Do not edit below this line
module.exports = fibonacci;
