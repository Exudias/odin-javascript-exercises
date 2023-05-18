const removeFromArray = function(array) {
    let newArray = [];
    const argsArray = Array.from(arguments);
    for (item of array)
    {
        if (argsArray.includes(item))
            continue;
        else
            newArray.push(item);
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
