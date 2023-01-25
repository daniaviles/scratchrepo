// UNIQUE IN ORDER

// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

// TIL that there is a Set object that will eliminate duplicates in an array.

var uniqueInOrder=function(iterable){
    var newArray = [];
    for (var i = 0; i < iterable.length; i++) {
      if (iterable[i] != iterable[i+1]) res.push(iterable[i]);
    }
    return newArray;
  }

  //loop through the iterable, and create a function that checks if each value is unique
  //if it is unique, then we'll push it into a new array.
  //return new array