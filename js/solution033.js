// Build Tower

// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
//1. How do we know how many "*" to use for the last floor? Create a function to do that
//2. The function would be to get the input integer and multiply it by 2, and subtract 1 from the result.
//3. So if the flloors were 3 total. it would look like this:
//4. (1 * 2) - 1 = 1 | First floor
//   (2 * 2) - 1 = 3 | Second floor
//   (3 * 2) - 1 = 5 | Third floor

//For the spaces...



function tower_builder(floors){
    let space,star, tower = [];
    for(i = 1; i <= floors; i++){
      space = " ".repeat(floors - i);
      star  = "*".repeat((2*i) - 1);
      tower.push(`${space}${star}${space}`);
    }
    return tower;
  }
