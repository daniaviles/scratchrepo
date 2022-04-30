// Exes and Ohs

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    let x = 0;
    let o = 0;
    for(i = 0; i < str.length; i++){
        if(str[i].toLowerCase() === 'x'){
            x += 1;
        }
        else if(str[i].toLowerCase() === 'o'){
            o += 1;
        }
    }
    return x === o;
}

//1. create variables for the number of xes and number of ohs
//2. loop through the string
//3. if the index element is x, then add 1 to the x variable
//4. if the index element is 0, then add 1 to the o variable
//5. if the number of exes equals the number of ohs, return true