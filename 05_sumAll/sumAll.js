const sumAll = function(min, max) {
    // validation
    if (min < 0 || max < 0 || typeof min !== "number" || typeof max !== "number")
    {
        return "ERROR";
    }
    // switch around if larger number first
    if (min > max)
    {
        let temp = min;
        min = max;
        max = temp;
    }

    let sum = 0;
    for (let i = min; i <= max; i++)
    {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
