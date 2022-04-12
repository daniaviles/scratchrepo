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


  

//      The museum of incredible dull things

// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

function removeSmallest(numbers) {
    var smallestNum = 0;
    for (var i = 0; i < numbers.length -1; i++){
        if(numbers[i + 1] < numbers [i]){}
    }
  }
  // TBD.....I'll figure it out later...