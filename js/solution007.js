// String Ends with?

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// 1. Create a boolean function that returns true
// 2. You have two arguments "str" and "ending". 
// 3. Subtract the string length from the ending length
// 3. Return true if ending passes through str in the appropriate length ending.

function solution(str, ending){
    return str.endsWith(ending);
}

// Use the string prototype .endsWith(), qhich reutns true or false. 