//Count The Divosors of a Number

//Count the number of divisors of a positive integer n.
//Random tests go up to n = 500000.
//Note you should only return a number, the count of divisors.
//The numbers between parentheses are shown only for you to see which numbers are counted in each case.
function getDivisorsCnt(n){
    let output = 0; 
    for (let i=1; i<=n; i++) {
      if (n % i == 0) {
        output += 1; 
}
}
  return output;
}
//1) Get positive integer
//2) write out a function to get the number of divisors of the input
//3) return the result
