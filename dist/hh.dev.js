"use strict";

/* make a function to count how many prime numbers in input */
function countPrimes(n) {
  var count = 0;

  for (var i = 2; i < n; i++) {
    if (isPrime(i)) {
      count++;
    }
  }

  return count;
}
/* make a function to check if a number is prime */


function isPrime(n) {
  for (var i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}