// Sum of Two Lowest Positive Integers

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoSmallestNumbers(numbers) {  
    let arr = numbers.sort((a,b) => a-b);
    let arrSliced = arr.slice(0,2)
    return arrSliced[0] + arrSliced[1];
  }

  //1. I ordered the array from least to greatest integer by using the .sort(a,b => a-b)

  //2. I renamed the new ordered array

  //3. I sliced the array, isolating indexes 0 and 1

  //4. I returned the sum of indexes 0 and 1

  // You actually didn't need to slice. You could have:
  // numbers = numbers.sort(function(a,b){
  //    return a -b}
  // return numbers [0] + numbers [1];
