/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/
// maxOfTwoNumbers = Functions
// perameter = (x, y) = Variables or placeholders that we will be using for inside our functions
const maxOfTwoNumbers = (x, y) => {
    // if x is greater than or equal to y
    // return x
    if (x >= y) {
      return x;
    //   else return y
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));
  
  /*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/
// function named isAdult
// num1 - If the person is older than 18 it should return Adult 
// else it should return a minor 

const isAdult = (num1) => {
    if (num1 >= 18){
        return "adult"
        
    } else {return "minor"}
        
}




console.log('Exercise 2 Result:', isAdult(17));


/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

// our function isCharAVowel
// the function is taking in a letter
// were checking for if a letter is a vowel
// If the letter has a vowel it should return true
// else it should return false

const isCharAVowel = (letter) =>{
    if (letter == "a"|| letter == "e"|| letter == "i"|| letter == "o"|| letter == "u"){
        return "true"}

    else {return "false"

    }

}

console.log('Exercise 3 Result:', isCharAVowel("a"));

/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/

// function is generateEmail
// 2 strings a name and a domain
// combining both strings and add @
const generateEmail = (string1, string2)=>{
    return string1 + "@" + string2
}

console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));

/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/
// function is greetUser 
// were taking in 2 strings
// string1 and string2
// combine the strings
const greetUser = (string1, string2)=>{
    return "good " + string2 + "," + string1
}


console.log('Exercise 5 Result:', greetUser("Sam", "morning"));

/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/
// function is maxOfThree
// The function is taking in 3 numbers
// num1 num2 num3 should return the largest number
// if num1 is larger than num2 
// then compare num1 to num3

// If num1 is the largest 
// then we should return num1
// else return num3

// if num2 is larger than num1
// then compare num2 to num3
// if num2 is larger than num3 then return num2

// if num3 is larger than return num3

const maxOfThree = (num1,num2,num3)=>{
    // if num1 is larger than num2 
// then compare num1 to num3
    if (num1 >= num2){
        // If num1 is the largest 
// then we should return num1
// else return num3
        if (num1 >= num3){
            return num1
        } else{return num3}
    

    } else{
        if (num2 >= num3){
            return num2
        }else{
            return num3
        }


    }
}



console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));

/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/
// function called calculateTip
// taking in two numbers
// tipAmount = billAmount * (tipPercentage / 100);
// return the information

const calculateTip = (billAmount, tip)=>{
    return billAmount * (tip / 100)
}



console.log('Exercise 7 Result:', calculateTip(50, 20));

/*
Exercise 8: convertTemperature()

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/
// function is convertTemperature
// function is taking 2 arguemnts: a num and a string
// if the string is "C" then Fahrenheit = (Celsius * 9/5) + 32
// if the string is "F" then celsius = (fahrenheit - 32) * 5/9;
const convertTemperature = ( num1, oompa)=>{
    if (oompa == "C"){
        return (num1 * 9/5) + 32
    }else{
        return ((num1 - 32) * 5/9)
    }
        
}



console.log('Exercise 8 Result:', convertTemperature(32, "F"));

// 
/*
Exercise 9: basicCalculator()

Create a function named basicCalculator. 
It should take three arguments: two numbers and a string representing 
an operation ('add', 'subtract', 'multiply', 'divide'). 
Perform the provided operation on the two numbers. 
In operations where the order of numbers is important, 
treat the first parameter as the first operand and the 
second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/

// function name is basicCalculator
// funcitons takes in 2 number and a string 
// if operation is add were going to take num1 and num2 and add together
// if operation is subtract were going to take num1 and num2 and subtract 
//  if operation is multiply were going to take num1 and num2 and multiply
// if operation is divide were going to take num1 and num2 and divide

const basicCalculator = (num1,num2,operation)=>{
if(operation == "add"){
    return num1 + num2

} else if(operation == "subtract"){
    return num1 - num2
} else if( operation == "multiply"){
    return num1 * num2}
    else if(operation == "divide"){
        return num1 / num2
    }
}

console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));
