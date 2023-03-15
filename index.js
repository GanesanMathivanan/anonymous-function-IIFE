// Using anonymous function

// Print odd numbers in an array

const arr1 = [1, 2, 3, 4, 5];
const oddNumbers = function(array) {
  for(let i = 0; i < array.length; i++) {
    if(array[i] % 2 !== 0) {
      console.log(array[i]);
    }
  }
}
oddNumbers(arr1);





// Using IIFE
const arr = [1, 2, 3, 4, 5];
(function(array) {
  for(let i = 0; i < array.length; i++) {
    if(array[i] % 2 !== 0) {
      console.log(array[i]);
    }
  }
})(arr);







// Convert all the strings to title caps in a string array

// anonymous function

let toTitleCaps = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  console.log(arr);
};
toTitleCaps(['am', 'learning', 'javascript']); 

// Output: [ 'am', 'learning', 'Javascript' ]







// Using IIFE
(function(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  console.log(arr);
})(['am', 'learning', 'javascript']); 

// Output: [ 'am', 'learning', 'Javascript' ]







// Sum of all numbers in an array



// Using anonymous function
let sumOfNumbers = function(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
};
sumOfNumbers([1, 2, 3, 4, 5]); 
// Output: 15






// Using IIFE


(function(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
})([1, 2, 3, 4, 5]);
 // Output: 15





//  Return all the prime numbers in an array

// Using anonymous function


 const primes = function(arr3) {
  return arr3.filter(num => {
    for(let i = 2; i < num; i++) {
      if(num % i === 0) {
        return false;
      }
    }
    return num > 1;
  });
}

const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(primes(arr3)); 
// Output: [2, 3, 5, 7]



// Using IIFE

const primeNumbers = (function(arr4) {
  return arr4.filter(num => {
    for(let i = 2; i < num; i++) {
      if(num % i === 0) {
        return false;
      }
    }
    return num > 1;
  });
}) 
([1, 2, 3, 4, 5, 6, 7, 8, 9]);

console.log(primeNumbers);
 // Output: [2, 3, 5, 7]





//  Return all the palindromes in an array

// Using anonymous function

 const palindromes = function(arr) {
  return arr5.filter(word => {
    const reversed = word.split('').reverse().join('');
    return word === reversed;
  });
}

const arr5 = ['level', 'radar', 'hello', 'racecar'];
console.log(palindromes(arr5)); 
//Output: ['level', 'radar', 'racecar']



// Using IIFE


const palindromeArr = (function(arr) {
  return arr.filter(word => {
    const reversed = word.split('').reverse().join('');
    return word === reversed;
  });
})(['level', 'radar', 'hello', 'racecar']);

console.log(palindromeArr); 
// Output: ['level', 'radar', 'racecar']




// Remove duplicates from an array


// Using anonymous function

const arr6 = [1, 2, 3, 2, 4, 3];

const uniqueArr = (function(arr) {
  return arr.filter(function(item, index) {
    return arr.indexOf(item) === index;
  });
})(arr6);

console.log(uniqueArr); // [1, 2, 3, 4]



// Using IIFE


const arr7= [1, 2, 3, 2, 4, 3];

const uniqueArr1 = (function(arr) {
  return arr7.filter(function(item, index) {
    return arr7.indexOf(item) === index;
  });
})(arr7);

console.log(uniqueArr1); // [1, 2, 3, 4]
