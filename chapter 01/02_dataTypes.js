"use strict"; //system will treat code as newer version

/* Data types in javascript
    1. number
    2. bignint
    3. string 
    4. boolean
    5. null
    6. undefined
    7. symbol

    8. Object => consist of built in and user defined objects

    built in objects are
        1. Object
        2. Arrays
        3. Dates
        4. maps
        5. sets
        6. intarrays
        7. floatarrays
        8. promises

 #1 JavaScript evaluates expressions from left to right. Different sequences can produce different results

 #2 check all combination at :- https://www.w3schools.com/js/js_datatypes.asp
 
 #3 Javascript numbers are always one type:- double (64-bit floating point).
*/
let accountID = 738043;
let accountName = "Kundalik jadhav";
let isLoggedIn = true;
let accountType = { type: "saving" };

console.log(
  typeof accountID,
  typeof accountName,
  typeof isLoggedIn,
  typeof accountType
);

console.log(typeof null); //=> null type is object
console.log(typeof undefined); //=> null type is undefined

//Below type is function
console.log(typeof String);
console.log(typeof Number);
console.log(typeof Boolean);

// #JavaScript evaluates expressions from left to right. Different sequences can produce different results:

let x; //=> now x is undefined
x = 5; //=> now x is Number
x = "jk"; //=> now x is String

//=> y = 16jk => number + string = string
let y = 16 + "jk";
//=> y = jk16 => string + number = string
y = "jk" + 16;
//=> y = 20jk => number + number + string = first number will add then concatinate with string and result is string
y = 16 + 4 + "jk";
//=> y = jk164 => string + number + number = string will concatinate with first and second number and result is string
y = "jk" + 16 + 4;
console.log(`y valu is ${y}`);

//Date

const date = new Date("2024-10-01");
console.log(`today date is ${date}`);
console.log(date.getDay());

console.log(new Date());
