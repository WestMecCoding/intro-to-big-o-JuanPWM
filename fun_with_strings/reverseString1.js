//initialize someString

//create a function that takes a string 'str' as an argument

//inside the function, reverse the string and return the reversed string

//then console log the function and pass in someString

let someString = "Hello World";

function reverseString(str) {
    
    // let reversed = str.split('').reverse('').join('');
    // return reversed;
    
    str = str.split('').reverse('').join('');
    return str;
}

console.log(reverseString(someString));

