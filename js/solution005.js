// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])

// should return "found the needle at position 5" (in COBOL "found the needle at position 6")

function findNeedle(haystack) {
    // What are we ultimately looking for?
    // An index
    // How do we find a specific element in an array and return its index?
    // indexOf method
    indexOfNeedle = haystack.indexOf('needle');
    console.log(`found the needle at position ${indexOfNeedle}`);
  }

  findNeedle(['hay','hay','hay','hay','needle','hay']);