const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	let result = 0;
  for (num of array)
  {
    result += num;
  }
  return result;
};

const multiply = function(array) {
  if (array.length === 0)
    return 0;
  let result = 1;
  for (num of array)
  {
    result *= num;
  }
  return result;
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(value) {
	let result = 1;
  for (let i = 2; i <= value; i++)
  {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
