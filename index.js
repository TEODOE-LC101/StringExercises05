let language = 'JavaScript';

//a) Use string concatenation and two .slice() methods to print 'JS' from 'JavaScript'.
console.log(language.slice(0,1) + language.slice(4,5));


//b) Without using .slice(), use method chaining to accomplish the same thing.

let str = "JavaScript";
let str1 = "JavaScript";

str = str.substring(0,1);
str1 = str1.substring(4,5);
console.log(str+str1);

//c) Use bracket notation and a template literal to print "The abbreviation for 'JavaScript' is 'JS'."
console.log(`The abbreviation for ${language} is ${str+str1}.`)


//d) Just for fun, try chaining 3 or more methods together, and then print the result.
console.log(language.replace('J','L').toUpperCase().replace('S',''))