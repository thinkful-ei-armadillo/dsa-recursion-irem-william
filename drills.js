'use strict';

// 1. Counting Sheep
function countingSheep(num) {
  if (num === 0) {
    console.log('All sheep jumped over the fence');
    return;
  }
  //base case 0 stop return
  //check the num if>0 another sheep
  //call recursive func for n-1
  if (num > 0) {
    console.log(`${num}: Another sheep jump over the fence`);
    countingSheep(num - 1);
  }
}

// countingSheep(3);


// 2. Power Calculator
function powerCalculator(base, exp) {
  //base case when exponent = 0
  //cause then it will just return base
  if (exp < 0) {
    console.log('exponent should be >= 0');
    return '';
  } else if (exp === 0) {
    return 1;
  } else {
    return base * powerCalculator(base, exp - 1);
  }
  // if (exp === 0) {
  //   return 1;
  // } //take base and recurse
  // if (exp > 0) {
  //   return base * powerCalculator(base, exp - 1);
  // }
}

console.log(powerCalculator(10, -2));


// 3. Reverse String

function reverseString(string) {
  // input: string
  // output: string but reversed
  if (string.length === 0) {
    return '';
  } else {
    return string[string.length - 1] + reverseString(string.slice(0, -1));
  }
}

console.log(reverseString(''));


// 4. nth Triangular Number

function triangular(n) {
  // input: n number
  // output: sum of n number
  if (n === 0) {
    return n;
  } else {
    return n + triangular(n - 1);
  }
}

console.log(triangular(1));


// 5. String Splitter

function splitter(string, separator) {
  // input: string, separator 
  // output: string without separator
  if (string === '') {
    return '';
  } else if (string.slice(0) !== separator) {
    return splitter(string.slice(1));
  } else {
    // come back later
  }
}
