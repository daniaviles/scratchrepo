// FIND THE ODD INT

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples

// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(A) {
    // set the variables. We need to know the number/integer value and we need to know the count of each integer
    var num;
    var count = 0;
// We need to loop through the entire array to know what each value is

    for(i = 0 ;i < A.length; i++){
       num = A[i]
// We neeed to loop through the entire array AGAIN to compare the values against the values in the first loop to see
//whether or not they repeaated. If they repeat, add it as a count.
       for( a= 0; a,a<A.length;a++){
          if(A[a]==num){
          count++;
          }
//After you add all of the counts, run a final test to see if the count is even or odd. Return odd count.
     } if(count%2!=0){
          return num;
     }
   }
}