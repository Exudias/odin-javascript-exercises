const palindromes = function (string) {
    // first, standardize
    let standardized = string.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g,"");
    return standardized === standardized.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
