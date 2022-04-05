//      MULPTIPLY

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
    if(number % 2 ===0){
      return('Even')
    }else{
      return('Odd')
    }
  }

  
//      RETURN NEGATIVE

//   In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

  function makeNegative(num) {
    if(num > 0){
      return(-num)
    }else if(num < 0){
      return(num)
    }else{
      return(0)
    }
  }


//    BASIC MATHEMATICAL OPERATIONS

// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

  function basicOp(operation, value1, value2){
    if(operation === '+'){
      return(value1 + value2)
    }else if(operation === '-'){
      return(value1 - value2)
    }else if(operation === '*'){
      return(value1 * value2)
    }else if(operation === '/'){
      return(value1/value2)
    }
  }
