# Functions
Functions are great, they take data (input), do stuff with that data and then return it to you all shiny and fancy (output).

## Getting Started
1. **Fork** this repository
1. **Clone** this repo from your personal GitHub account.
    - Copy the SSH address on the page
    - Run the command: `$ git clone [YOUR SSH ADDRESS]` to clone this repo onto your computer.
1. Navigate into the exercise folder, e.g. `$ cd prep-js-functions`.
1. Run the command: `$ npm install` to get all other files needed to run the tests.
1. Your work will be entered into the file named `functions.js`
1. Run your tests with the command `$ npm test`.
  - You will need to enter this command each time you want to run the tests.

Below are some specifications for Functions to be built.

# `Declare Two Variables`
- `a` random Number value
- `b` random Number value

We will be using both of these variables to pass as `parameters` to the following functions that we will write. Pay close attention to the other variable names you will create as they will become input to _other_ functions.

# `Function - add`
This function returns the result of adding `a` and `b` together. Store this value in a variable named `sum`.

# `Function - subtract`
This function returns the result of subtracting `b` from `a` Store this value in a variable named `difference`

# `Function - multiply`
This function returns the result of multiplying `b` by `a`. Store this value in a variable named `product`

# `Function - checkDifference`
This function accesses the value stored in the `difference` variable and uses this number to return the string "My football team lost X times this week", where `X` is the value stored in `difference`.

# `Function - checkSum`
This function checks the value stored at `sum` and uses that number to print to the screen the phrase "I CAN ADDZ X NUMBERS"  where `X` is the value stored in the variable `sum` .

# `Function - checkProduct`
This function checks the value stored at `product` and multiplies it by the number stored at `difference` and then prints the result to the console.

# `Function - addThenSubtract`
This function takes three `Number` arguments named by you, then adds the first two arguments together. Then with the sum of that operation, subtract the value at the third argument. _This function should make use of your previous functions_.

**example:** `addThenSubtract(4, 5, 7); //-> returns 2 because 4 + 5 - 7 = 2`

# `Function - addThenMultiply`
This function takes three `Number` arguments named by you, then adds the first two arguments together. Then with the sum of that operation multiply it by the third argument. _This function also should make use of your previous functions_.

**Store the return of this function to a variable named** `howMany`

# `Function - createFullName`
```javascript
@param Datatype: String firstName
@param Datatype: String lastName
@return Datatype: String
```

This function takes two String arguments `firstName` and `lastName`. This function `returns` back a string which represents someone's full name.

**Call this function and pass your first and last name into it. Store the return value to a variable named** `myFullName`

# `Function - verifyDrinkingAge`
```javascript
@param Datatype: Number age
@return Datatype: Boolean
```

This function takes one Number argument `age`. This function returns the `Boolean` value `true` or `false` if `age` is lower than the legal drinking age in the state of Hawaii.

**Call this function and pass in a number value. Store the return value to a variable named** `canDrinkBeer`

# `Function - throwParty`
This function checks the value stored at the `canDrinkBeer` variable and if the value is `false` it should print to a message to the screen, "The Party will have tons of Cake!" otherwise this message should be "This Party will have an open bar".

# `Function - eatFood`
This function takes 3 arguments `firstName`, `lastName`, `food` and prints out a message to your screen. Internally this function will make use of the `createFullName` function you created earlier.

**exmaple input:** if someone called your program like this `eatFood( "John", "Papa", "Pizza" )`

**example output:** `"John Papa loves to eat Pizza"`

**exmaple input:** if someone called your program like this `eatFood( "Peter", "Bojangles", "California Burritos" )`

**example output:** `"Peter Bojanglesloves loves to eat California Burritos"`

# `Function - repeater`
This function will print to the screen `X` amount of times. Where `X` is the value stored at `howMany`. Inside of this function it will check if the value of `canDrinkBeer`, if the value is true the message will be `"Bacon Pancakes, makin' Bacon Pancakes..."` othewise the message will be `"Let it go.... LET IT GOOOOOOoOoOoOo..."`