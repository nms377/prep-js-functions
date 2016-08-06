/**
 *  Below are some specifications for Functions to be built.
 *
 *  #1
 *  Declare Two Variables
 *     - `a` random Number value
 *     - `b` random Number value
 *
 *  We will be using both of these variables to pass as `parameters` to the
 *  following functions that we will write. Pay close attention to the other
 *  variable names you will create as they will become input to _other_
 *  functions.
 */
 var a = 10
 var b = 4

/**
 *  #2
 *  Function - add
 *
 *  This function returns the result of adding `a` and `b` together.
 *  Store this value in a variable named `sum`.
 */

/*my work*/
function add(n1, n2){
	var sum = n1 + n2;
	return sum;
}
add();

console.log(add(a,b));

/*Class Work*/
function add(n1, n2){
	return n1 + n2;
}
add();

var sum = add(a,b);
console.log(sum);

/**
 *  #3
 *  Function - subtract
 *
 *  This function returns the result of subtracting `b` from `a`.
 *  Store this value in a variable named `difference`
 */

/*my work*/
function difference(n1, n2){
	var difference = n1 - n2;
	return difference;
}
difference();

console.log(difference(a,b));

/*class work*/
function subtract(n1, n2){
	return n1 - n2;
}

var difference = subtract(b,a)
console.log(difference);

/**
 *  #4
 *  Function - multiply
 *
 *  This function returns the result of multiplying `b` by `a`.
 *  Store this value in a variable named `product`
 */

/*my work*/
function multiply(n1, n2){
	var product = n1 * n2;
	return product;
}
multiply();

console.log(multiply(b,a));

/*class work*/

function multiply(n1,n2){
	return n1 * n2;
}

var product = multiply(a,b);
console.log(product);

/**
 *  #5
 *  Function - checkDifference
 *
 *  This function accesses the value stored in the `difference`
 *  variable and uses this number to return the string
 *  "My football team lost X times this week", where `X` is the
 *  value stored in `difference`.
 */

/*my work*/
function checkDifference(n1, n2){
	var difference = n1 - n2;
	return "My football team lost " + difference + " times this week.";
}
checkDifference();

console.log(checkDifference(a,b));

/*class work*/
function checkDifference(x){
	/*not necessary, extra step ---> var x = difference;*/
	return "My football team lost " + x + " times this week.";

}
checkDifference();
console.log(checkDifference(difference));


/**
 *  #6
 *  Function - checkSum
 *
 *  This function checks the value stored at `sum` and
 *  uses that number to print to the screen the phrase
 *  "I CAN ADDZ X NUMBERS"  where `X` is the value
 *  stored in the variable `sum`.
 */

/*my work*/function checkSum(n1, n2){
	var sum = n1 + n2;
	return "I CAN ADDZ " + sum + " NUMBERS";
}
checkSum();

console.log(checkSum(a,b));

/*class work*/
function checkSum(x){
	return "I CAN ADDZ " + x + " NUMBERS";

}

checkSum();
console.log(checkSum(sum));

/**
 *  #7
 *  Function - checkProduct
 *
 *  This function checks the value stored at `product` and
 *  multiplies it by the number stored at `difference` and
 *  then prints the result to the console.
 */

/*my work*/
function checkProduct(n1, n2){
	var product = n1 * n2;
	var difference = n1 - n2;
	return product * difference;
}
checkProduct();

console.log(checkProduct(a,b));

/*class work*/
function checkProduct(n1,n2){
	return n1*n2;
}
checkProduct();
console.log(checkProduct(product, difference));


/**
 *  #8
 *  Function - addThenSubtract
 *
 *  This function takes three `Number` arguments named by you,
 *  then adds the first two arguments together.
 *  Then with the sum of that operation, subtract
 *  the value at the third argument. _This function should
 *  make use of your previous functions_.
 *
 *  **example:**
 *      addThenSubtract(4, 5, 7); //-> returns 2 because 4 + 5 - 7 = 2
 */

/* My work doesn't work --->
var c = 4
var d = 5
var e = 7

function addThenSubtract(n1, n2,n3){

add();

}

addThenSubtract();

console.log(addThenSubtract(c,d,e));*/

/*class work*/

function addThenSubtract(n1, n2, n3){
	/*Orer of Operations ---> return (n1 + n2) - n3;*/
	var sumUp = n1 + n2;
	return sumUp - n3;
}
addThenSubtract();
console.log(addThenSubtract(product, difference, sum));
/**
 *  #9
 *  Function - addThenMultiply
 *
 *  This function takes three `Number` arguments named by you,
 *  then adds the first two arguments together.
 *  Then with the sum of that operation multiply it by the third argument.
 *  _This function also should make use of your previous functions_.
 *
 *  Store the return of this function to a variable named `howMany`
 */

/*class work*/
function addThenMultiply(n1, n2, n3){
	var sumUp = n1 + n2;
	return sumUp * n3;
	/*short hand --> return (n1 + n2) *n3 */
}
addThenMultiply();
console.log(addThenMultiply(product, difference,sum));

/**
 *  #10
 *  Function - createFullName
 *
 *  @param Datatype: String firstName
 *  @param Datatype: String lastName
 *  @return Datatype: String
 *
 * This function takes two String arguments `firstName` and `lastName`.
 * This function `returns` back a string which represents someone's full name.
 *
 * Call this function and pass your first and last name into it.
 * Store the return value to a variable named `myFullName`
 */

/*my work */
function fullName(first, last){

	var myFullName = first + " " + last;
	return myFullName;

}

fullName();

console.log(fullName("coco", "sandry"));

/**
 *  #11
 *  Function - verifyDrinkingAge
 *
 *  @param Datatype: Number age
 *  @return Datatype: Boolean
 *
 *  This function takes one Number argument `age`.
 *  This function returns the `Boolean` value `true` or `false` if `age` is
 *  lower than the legal drinking age in the state of Hawaii.
 *
 *  **Call this function and pass in a number value.
 *  Store the return value to a variable named** `canDrinkBeer`
 */


/**
 *  #12
 *  Function - throwParty
 *
 *  This function checks the value stored at the `canDrinkBeer` variable and
 *  if the value is `false` it should print to a message to the screen,
 *  "The Party will have tons of Cake!" otherwise this message
 *  should be "This Party will have an open bar".
 */


/**
 *  #13
 *  Function - eatFood
 *
 *  This function takes 3 arguments
 *  `firstName`, `lastName`, `food` and prints out a message to your screen.
 *  Internally this function will make use of the `createFullName`
 *  function you created earlier.
 *
 *  **example input:**
 *      if someone called your program like this `eatFood( "John", "Papa", "Pizza" )`
 *  **example output:**
 *     "John Papa loves to eat Pizza"
 *
 *  **example input:**
 *      if someone called your program like this `eatFood( "Peter", "Bojangles", "California Burritos" )`
  *  **example output:**
 *      "Peter Bojanglesloves loves to eat California Burritos"
 */


/**
 *  #14
 *  Function - repeater
 *
 *  This function will return a string to that repeats one of the phrases
 *  below `X` amount of times, where `X` is the value stored at `howMany`.
 *  Inside of this function it will check if
 *  the value of `canDrinkBeer`, if the value is true
 *  the message will be `"Bacon Pancakes, makin' Bacon Pancakes..."`
 *  othewise the message will be `"Let it go.... LET IT GOOOOOOoOoOoOo..."`
 */

