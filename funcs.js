function isFive(num) {
  return num === 5;
}

function isOdd(number) {
  if (typeof number !== 'number') {
    throw new Error;
  }
  return number % 2 !== 0;
}

function myRange(min, max, step = 1) {
  let rangeArray = [];
  for (let i = min; i <= max; i += step) {
      rangeArray.push(i);
  }
  return rangeArray;
}

module.exports = { isFive, isOdd, myRange };
