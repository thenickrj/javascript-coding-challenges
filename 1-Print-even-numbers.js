const readLineSync = require("readline-sync");

let range = readLineSync.question("So What's should be the range of numbers: ");

let primeNumbers = [];

function isPrime(n) {
  if (n < 2) return false;
  if (n === 2 || n === 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;

  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}

for (let i = 1; i <= range; i++) {
  if (isPrime(i)) {
    primeNumbers.push(i);
  }
}

function sieveOfEratosthenes(n) {
  let primes = Array(n + 1).fill(true);
  primes[0] = primes[1] = false; // 0 and 1 are not prime

  for (let i = 2; i * i <= n; i++) {
    if (primes[i]) {
      for (let j = i * i; j <= n; j += i) {
        primes[j] = false; // Mark multiples as non-prime
      }
    }
  }

  return primes.map((isPrime, i) => (isPrime ? i : null)).filter(Boolean);
}
// let primeNumbers = sieveOfEratosthenes(range);
const readLineSync = require("readline-sync");

// Approach 3
// let range = parseInt(readLineSync.question("Enter the range: "), 10);
// let primeNumbers = segmentedSieve(range);

function simpleSieve(limit) {
  let primes = Array(limit + 1).fill(true);
  primes[0] = primes[1] = false;

  for (let i = 2; i * i <= limit; i++) {
    if (primes[i]) {
      for (let j = i * i; j <= limit; j += i) {
        primes[j] = false;
      }
    }
  }
  return primes.map((isPrime, i) => (isPrime ? i : null)).filter(Boolean);
}

function segmentedSieve(n) {
  let limit = Math.floor(Math.sqrt(n)) + 1;
  let primes = simpleSieve(limit);
  let low = limit,
    high = 2 * limit;
  let result = [...primes];

  while (low < n) {
    if (high > n) high = n;

    let isPrime = Array(high - low + 1).fill(true);

    for (let prime of primes) {
      let start = Math.max(prime * prime, Math.ceil(low / prime) * prime);

      for (let j = start; j < high; j += prime) {
        isPrime[j - low] = false;
      }
    }

    for (let i = 0; i < isPrime.length; i++) {
      if (isPrime[i]) result.push(low + i);
    }

    low += limit;
    high += limit;
  }

  return result;
}

console.log(primeNumbers);

console.log(primeNumbers);
