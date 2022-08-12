//Grasshopper - Personalized Message


// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'

function greet (name, owner) {
  
    if (name === owner){
      return 'Hello boss'
    }else{
      return  'Hello guest'
    }
  }

  // Easy Peasy. If the name is equivalent to the owner, return "Hello boss", otherwise return "Hello guest"