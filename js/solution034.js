// KEEP HYDRATED 

// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
// (I think I need to use Math.floor()

// For example:

// time = 3 ----> litres = 1 Math.floor(time * .5 = quantity))

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

function litres(time) {
    let litres = Math.floor(time * 0.5);
    return litres
  }

