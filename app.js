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
