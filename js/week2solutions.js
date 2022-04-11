//      Grasshopper - Check for factor

// This function should test if the factor is a factor of base.
// Return true if it is a factor or false if it is not.

function checkForFactor (base, factor) {
    if(base % factor === 0){
        return true
    }else{
        return false
    }
  }


  
//      Convert a Number to a String!
// We need a function that can transform a number into a string.
// What ways of achieving this do you know?

  function numberToString(num) {
    return num.toString();// Return a string of the number here!
  }