// Invert Values

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

function invert(array) {
    let invertedArray = []

    for(i = 0; i < array.length; i++){
        if(array[i] > 0){
            invertedArray.push(array[i] -(array[i] * 2));
        }
        else if(array[i] < 0){
            invertedArray.push(Math.abs(array[i]));
        }
        else{
            invertedArray.push(-0);
        }
    }
    return invertedArray
 }

//1. Create an inverted array
//2. Loop through the original array
//3. If an element inside an index is a postitive integer, subtract it from 2 times itself.
//4. If an element inside an index is a negative integer, use the absolute method to invert it.
//5. If the integer is a zero, push a negative zero.