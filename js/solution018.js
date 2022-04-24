// Is it a Pallindrome?

// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
    let lowerCaseString = x.toLowerCase();
    let reversedX = lowerCaseString.split("").reverse().join("")
    return lowerCaseString === reversedX;
  }

  //1. The result will either be True or False. Boolean
  //2. Make the string .toLowerCase()
  //3. Get the reversed version of the string
  //4. Use join () to make the reversed string into a string and not an array
  //5. Check if the forward string is the same as the reversed.
  