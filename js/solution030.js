// Abbreviate a Two Word Name

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){
    let array = name.split(' ')
    for(let i = 0; i < array.length; i++){
      return (array[i][0]).toUpperCase() + '.' + (array[i + 1][0].toUpperCase())
    }
  }

  //1. make the input "name" into an array
  //2. Loop through the array of words
  //3. Return the zero index of each word, capitalize it, and separate with a period
  //4. Return the result