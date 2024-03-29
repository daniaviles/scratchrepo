// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

//1. Loop through array a
//2. Create a function that loops through every element in array a, and if the element is found in array b, then don't return it

function arrayDiff(a, b) {
  return a.filter(e => !b.includes(e));
}