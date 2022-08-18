// Remove exclamation marks


// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    //Use the replace method. Enter the exclamation mark as the first parameter to globally locate all exclamation marks and 
    //replace them with nothing.
    let exclamations = /!/gi;
    return (s || '').replace(exclamations,'')
  }