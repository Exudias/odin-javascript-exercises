const reverseString = function(string) {
    let output = "";
    let stringArray = string.split("");
    for (let i = stringArray.length - 1; i >= 0; i--)
    {
        output += stringArray[i];
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;
