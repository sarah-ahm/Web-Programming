import * as variables from './variables.js';

const { 
  num1, num2, num3, num4,
  str1, str2, str3, str4 
} = variables;

// What does this statement log and why?
// This statement logs '2.01' because num1 is set 1 and num2 is set to 1.01 in variables.js
console.log(num1 + num2);

// What does this statement log and why?
// This statement logs 'invalid assignment to const num1' because num1 is a const and cannot be reassigned
console.log(num1 += num2);

// What does this statement log and why?
// This statement logs 'NaN' because num4 is not defined and cannot be added to num3
console.log(num3 + num4);

// What does this statement log and why?
// This statement logs 'SyntaxError: redeclaration of const num4' because num4 was already declared 
// let num4 = 0;
console.log(num3 + num4);

// What does this statement log and why?
// This statement logs 'hello world' because these are the values set in variables.js
console.log(str1, str3);

// What does this statement log and why?
// This statement logs 'hello there world undefined' because str4 is not defined 
console.log(str1, str2, str3, str4);
