// Digit*Digit

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-35)

// Note: The function accepts an integer and returns an integer.

// Happy Coding!

function squareDigits(num){
    let string = num.toString()
    let result = [];
    for (i = 0; i < string.length; i++){
        result[i] = string[i] ** 2
    }
    return Number(result.join(''))
  }

  //first we need to take in the num
  //make the num into a string
  //loop through each string and pass it through a function where we square each value of string
  //take each result and place it inot an array
  //take all of the results in the array and concatentate it together using .join()
  // After concatentation, turn into a number and return