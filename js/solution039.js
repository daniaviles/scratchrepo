//Disemvowel Trolls


// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.


  //1. We could use the replace() method. This find certain patterns within a string and replaces it with something. 
  //2. Find the AEIOU's and replace them with a space

  function disemvowel(str){
    let vowels = /[aeiou]/gi;
    return (str || '').replace(/vowels/gi,'')
  }

  //1. Create a variable that holds all of the vowels(no matter the case), those which you want to REPLACE in string.
  //2. return the string exactly how it is and replace the vowels with no space