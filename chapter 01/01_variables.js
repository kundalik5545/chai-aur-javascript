const accountID = 12345;
let accountName = "kundalik jadhav";
var accountPassword = "pass123";
accountCity = "pune";

//Note-  Var can be redeclared and reassinged new values but for let can be updated but not redeclared.
var accountPassword = 45343;
//let accountName = "poonam jadhav";

console.log(accountID);
console.table([accountName, accountPassword, accountCity]);
console.table({ accountName, accountPassword, accountCity });

//Account id not changes as declared as const...
//accountID = 45532;

//Notes- For let and var we can change data value which i previously declared...
accountName = "akshay jadhav";
accountPassword = 564365;
accountCity = "mumbai";

console.log(accountID);
console.table([accountName, accountPassword, accountCity]);
console.table({ accountName, accountPassword, accountCity });

let names;
var myname;
// const testing;

//names = "kj";

console.log(`my name is ${names}`);
console.log(`my name is ${myname}`);
// console.log(`my name is ${testing}`);

/* This is multiline comment
#Notes :-
    #var:-
        1. Var is function scoped if declared inside function - only accessed inside function
        2. Var is global scoped if declared globally so can be accessed outside function anywhere
        3. Redcalre and re-assign can be done
        4. Do not use most of time
        5. Causes issue as var can be used before initialization. its valu is - undefined

    #Let:-
        1. Let is function, block, expression, statement scoped - if declared inside function only accessed inside function
        2. Redcalare is not possible but re-assign can be done.
        3. let can be used without initialization. its valu is - undefined
        4. 

    #const:-
        1. cosnt is block scoped 
        2. Redclaration and re-assign can not be done
        3. can not used without re-declaration - give compile error.
        4.

        If any thing used before declaration then run time error as - not defined...
*/
