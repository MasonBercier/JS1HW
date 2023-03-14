console.log('test');

//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
`Matched ${dog_name}` if name is in the string, if its not a match console.log "No Match"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
let dog_names = ["Max","HAS","PuRple","dog"];

// Create a function to take in a arr and string
function findWords(aString, aList){
    // Itterate over list
    for(let word of aList){
        //Check for matches without case sensativity
        //Sorry I cant's spell without spell check
       if(aString.toLowerCase().includes(word.toLowerCase())){
        //Console log match or no match
        console.log(`Matched ${word}`)
        }
       else {
        console.log(`No Match`)
       } 
    }
};

// Pass in variables
findWords(dog_string,dog_names);

//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let Given_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"];

// Create a function to take in an arr
function replaceEvens(arr){
    // Itterate over list
    for(let i = 0; i < arr.length; i ++){
        // Check for even index
        if(i % 2 == 0){
            // Replace even index and log changed list
            arr[i] = 'even index'
        }
    } console.log(arr)
};

replaceEvens(Given_arr);

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]



// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'

function getGrade (s1, s2, s3) {
    // Add and average all scores
    let sum = s1 + s2 +s3
    let avg = sum / 3
    // Return grade based on avg
    if(avg < 60) {
      return 'F'
    } else if (avg < 70){
      return D
    } else if (avg < 80){
      return C
    } else if (avg < 90){
      return B
    } else{
      return A 
    }
  }

//   const Test = require('@codewars/test-compat');

// describe('grade book', function () {
//   it('should return an A', function () {
//     Test.assertEquals(getGrade(95,90,93), 'A')
//     Test.assertEquals(getGrade(100,85,96), 'A')
//     Test.assertEquals(getGrade(92,93,94), 'A')
//     Test.assertEquals(getGrade(100,100,100), 'A')
//   })
//   it('should return a B', function () {
//     Test.assertEquals(getGrade(70,70,100), 'B')
//     Test.assertEquals(getGrade(82,85,87), 'B')
//     Test.assertEquals(getGrade(84,79,85), 'B')
//   })
//   it('should return a C', function () {
//     Test.assertEquals(getGrade(70,70,70), 'C')
//     Test.assertEquals(getGrade(75,70,79), 'C')
//     Test.assertEquals(getGrade(60,82,76), 'C')
//   })
//   it('should return a D', function () {
//     Test.assertEquals(getGrade(65,70,59), 'D')
//     Test.assertEquals(getGrade(66,62,68), 'D')
//     Test.assertEquals(getGrade(58,62,70), 'D')
//   })
//   it('should return an F', function () {
//     Test.assertEquals(getGrade(44,55,52), 'F')
//     Test.assertEquals(getGrade(48,55,52), 'F')
//     Test.assertEquals(getGrade(58,59,60), 'F')
//     Test.assertEquals(getGrade(0,0,0), 'F')
//   })
//   it('should work for random numbers', function () {
//     for (let i = 0; i < 100; i++) {
//       let rand1 = Test.randomNumber();
//       let rand2 = Test.randomNumber();
//       let rand3 = Test.randomNumber();
//       Test.assertEquals(getGrade(rand1, rand2, rand3), solution(rand1, rand2, rand3))
//     }
//   })
  
// })


// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.



function removeExclamationMarks(s) {
    //Create empty string
    let newS = ''
    // Itterate over old string
    for(let char of s){
      // Chcek for '!'
      if(char != '!'){
        // Add to new string if not '!' and return new string
        newS += char
      }
    }
    return newS
  }


//   const chai = require("chai");
//   const assert = chai.assert;
//   chai.config.truncateThreshold=0;
  
//   describe("Tests", () => {
//     it("Fixed tests", () => {
//       assert.strictEqual(removeExclamationMarks("Hello World!"), "Hello World");
//       assert.strictEqual(removeExclamationMarks("Hello World!!!"), "Hello World");
//       assert.strictEqual(removeExclamationMarks("Hi! Hello!"), "Hi Hello");
//     })
    
//     it("Random tests", () => {
  
//       function solution(s) {
//         return s.replace(/!/g, '');
//       }
  
//       const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZbcdefghijklmnopqrstuvwxyz";
//       const getRandomString = () => Array.from({ length: 10 }).map(x => abc[~~(Math.random() * abc.length)]).join('');
  
//       let rs = getRandomString() + '!' + getRandomString() + ' ' + getRandomString() + '!' + getRandomString();
//       assert.strictEqual(removeExclamationMarks(rs), solution(rs), `Testing for s = ${JSON.stringify(rs)}`);
//       });
//   });