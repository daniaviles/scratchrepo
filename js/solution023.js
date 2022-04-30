// Categorize New Number

// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// Example
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

function openOrSenior(data){
    return data.map(x => {
        if(x[0] >= 55 && x[1] > 7){
            return "Senior";
        }
        else{
            return "Open";
        }
    })
  }

  //1.We need to use map array method to loop through each element in the array of data.

  //2. For each data pair, we need to loop through index 0 and 1

  //3. If index zero is greater than or equal to 55, AND index 1 is greater than 7, return "Senior"

  //4. Else return "Open"