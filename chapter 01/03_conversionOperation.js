/* Into Number conversion
    1. "33" => 33
    2. "33abc" => NaN
    3. null => 0
    4. undefined = NaN
    5. object => NaN
    6. true => 1; false => 0
    7. 1 => 1
*/

function numberConversion() {
  let score = 1;

  console.log(typeof score);
  let scoreVal = Number(score);
  console.log(typeof scoreVal);
  console.log(`converted number value is ${scoreVal}`); //=> NaN => Not a number
}
//numberConversion();

/* Into String conversion
    1. "kundalik" => kundalik
    2. "33" => 33 as string
    3. null => null as string
    4. undefined = undefined as string
  *5. object => Oject Object
    6. true => true as string; false => false as string
    7. 1 => 1 as string
*/

function stringConversion() {
  let score = 1;

  console.log(typeof score);
  let scoreVal = String(score);
  console.log(typeof scoreVal);
  console.log(`converted string value is ${scoreVal}`); //=> NaN => Not a number
}
//stringConversion();

/* Into String conversion
    1. 1 => true & 0 => false
    2. "33" => true & ""=> false
    3. null => false
    4. undefined = false
  *5. object => Oject Object
    6. true => true; false => false; 
    7. 1 => true
*/

function booleanConversion() {
  let isLoggedIn = true;

  console.log(typeof isLoggedIn);
  let booleanCon = Boolean(isLoggedIn);
  console.log(typeof booleanCon);
  console.log(`converted boolean value is ${booleanCon}`); //=> NaN => Not a number
}
booleanConversion();
