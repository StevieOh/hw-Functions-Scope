console.log("JavaScript is working!");

// 1. There is no "question 1"
// 
// 2. What is the difference between a parameter and an argument?
    // A parameter is what your code is constricted by
    // An argument is something that defines your code
    // 
// 3. Within a function, what is the difference between return and console.log?
   // "Return" will end the loop or function, so the code below will not be executed.
   // Console.log will display the parameter in the  browser console.
   // 

  // Write a function checkPalindrome that accepts a single argument, a string. The function should return true (Boolean) if the string is a palindrome, false if it is not. Make sure your function will give the correct answer for words with capital letters.
  const checkPalindrome = (pdm) => {
    // console.log(pdm);
    const lower = pdm.toLowerCase()
    console.log(lower);
    const array = lower.split("");
    // console.log(array);
    const rev = array.reverse();
    const back = (rev.join(""));
    console.log(back);
    if (back === lower){
      console.log(true);
    }else {
      console.log( false);

    }
  }
  checkPalindrome("Radar");
//  //=> true
  checkPalindrome("Borscht");
// //=> false
