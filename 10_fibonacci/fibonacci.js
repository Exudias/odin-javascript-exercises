const fibonacci = function(n) {
    n = +n; // convert to int from string
    // validate against negatives
    if (n < 0)
    {
        return "OOPS";
    }
    
    if (n <= 2)
    {
        return 1;
    }
    else
    {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
};

// Do not edit below this line
module.exports = fibonacci;
