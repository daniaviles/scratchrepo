// Count of Postives / Sum of Negatives

//Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.

// Example:

// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
    let count = 0;
    let sum = 0;
    if(input == null || input.length <= 0){
        return [];
    }else{
        input.forEach((num) => element > 0 ? count++ : sum += element);
    }
    return [count, sum]
}    


  //First we need the input to be an array.
  //Then we need to figure out how to take all of the positive #s from the array input and count their total.
  //Then we need to figure out how to take all of the negative #s and calculate their sum.
  // Then we return the count of positives into the first element of array.
  //Then we return the sum of negatives intot the second element of array.