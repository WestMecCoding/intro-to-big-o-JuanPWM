let string = "Hello World"

function reverseString(str) {
    str = str.split('').reverse('').join('');
    return str;
}

console.log(reverseString(string));