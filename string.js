//  1. Write a function that compares two strings regardless of case sensitivity using toLowerCase() or toUpperCase(). 
//   Return true if the strings are the same, otherwise return false.

// let string1 = "hello world";
// let string2 = "Hello World";
// function compareString(s1,s2){
//     if(s1.toLowerCase() === s2.toLowerCase()){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(compareString(string1,string2));



// 2. Create a function that checks if a given sentence contains the word "JavaScript" 
// using the includes() method. Return a message indicating whether the word is found.

// let sentence = "I like to learn JavaScript";
// function search( JS){
//     if(JS.includes("JavaScript") ===true ){
//         return "Found JS";
//     }
//     else{
//         return false;
//     }
// }
// console.log(search(sentence));



// 3. Write a function that splits a sentence into an array of words using split(). Then, use join() 
// to convert the array back into a sentence, separating the words with hyphens (-).


// let firstSentence = "I love Bangladesh";
// function splitInArray(str){
//     let splitWord = str.split("")
//     return splitWord.join("-");
    
// }
// console.log(splitInArray(firstSentence));



// 4. Create a function that takes a string and extracts a portion using slice(). 
// The function should take a start and an end index as arguments and return the sliced part.
 

// let string = "Bangladesh is a beautifull country .";
// function usingSlice(start, end){
//     return string.slice(start, end);
// }
// console.log(usingSlice(10,26));





// PROBLEM 5 - Given an object with properties name, email, and age, use destructuring to extract the values into variables and log them to the console.
// SOLVE 5
let mySelf = {
    myName: "Mitu",
    email: "mitu@gmail.com",
    age: 24
};
let {myName, email, age} = mySelf;
console.log(myName, email, age);