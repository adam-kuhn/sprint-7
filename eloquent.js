//Chapter 3 Eloquent JS examples
//Function to return smallest number of two values
function min(a, b){
  if (a < b){
    return a
  } else {
    return b
  }
}

//Determine even or odd
//this is what I did, but it's not the intended way
function isEven(n){
  if (n % 2 == 0){
    return true
  }else{
    return false}
}
// intended solution below. Shows how recursion works. But seems very unnecessary to produce the desire result.
function isEven(n) {
  if (n == 0)
    return true;
  else if (n == 1)
    return false;
  else if (n < 0)
    return isEven(-n); //if n is negative, this makes it positive
  else
    return isEven(n - 2); //run until either n == 0 or n == 1
}

//Bean Counter
//part 1 count the B's. not sure if intended solution but it works
function countBs(string){
  let bCount = 0;
  stringArray = string.split("");
  for (i=0; i<stringArray.length; i++){
    if (stringArray[i] === "B"){
       bCount += 1;
    }
}
return bCount;
}

//Part 2 charCount
function countChar(string, char){
  let charCount = 0;
  stringArray = string.split("");
  for (i=0; i<stringArray.length; i++){
    if (stringArray[i] === char){
       charCount += 1;
    }
}
return charCount;
}

//Intended solution to Bean Counter (is actually quite similar to mine). Below is the provided solution to Part 2 (which is essentially part 1)
function countChar(string, ch) {
  var counted = 0;
  for (var i = 0; i < string.length; i++)
    if (string.charAt(i) == ch)
      counted += 1;
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}
