//Who Likes it?

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// Note: For 4 or more names, the number in "and 2 others" simply increases.


function likes(names){
    //Create a conditional to determine how many values there are in the array. 
    //If there are none, then return "no ones likes this"
    if(names.length === 0){
        return "no one likes this"
    //If there is one, return "value likes this"
    }else if(names.length === 1){
        return `${names[0]} likes this`
    //If there are two names in the array, return the names + "like this"
    }else if(names.length === 2){
        return `${names[0]} and ${names[1]} like this`
    }else if(names.length ===3){
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
    }
    //If there are 4 or more names, return names + "(number of others) like this"
    else{
        //figure out how many others like this
        let others = Number(names.length - 2);
        return `${names[0]}, ${names[1]} and ${others} others like this`
    }
}