lec 01. Statements
lec 02. Syntax
lec 03. Comments
lec 04. Operators
lec 05. Arithmatic
lec 06. Assignment
lec 07. Strings
lec 08. String Methods
These all are discussed in other lectures so no need here.

lec 09. String Search
.match method is used that we discussed already in other lectures/repositories.


lec 10. String Templates
this allow to embedd expressions and variables directly in string. 
let a=5;
let b=10;

let result = `sum of ${a} and ${b} is: ${a+b}`;
console.log(result);


lec 11. Random
math.random function that we learned before in other lectures. if we want random numbers b/w 1-6 like dice.
here is code.

    const diceroll= math.floor(math.random()*6)+1;

    console.log("dice roll (1-6): ", diceroll);

lec 12.Boolean
lec 13. Switch
lec 14. Break
These are also discussed earlier. 


lec 15.Sets
a set is collection of values where each value is unique. 
    const uniquenumbers= new Set([1,2,3,4,5,1,2]);
    console.log(uniquenumbers);
it will print only 1 to 5 unique numbers.


lec 16. Typeof
alreafy discussed.


lec 17. RegExp
    const pattern= /hello/;
    const text= 'hello world';
    console.log(pattern.test(text));
// this will return true. 

const vowels= /[aeiou]/;
const matching= 'hello there, this is a demo';
console.log(matching.match(vowels));
//this is used to check each letter separately. 

lec 18.Scope
already discussed.


lec 19.Strict Mode
strict mode helps in catching common errors and prevent use of some unsafe features. it is set of rules that make
code more robust.

lec 20.Style Guide
how to make code more readable and easily accessible.

lec 21.Class Inheritance
concept of inheritance.
class Animal {
    constructor(name) {
        this.name=name;
    }
    makesound(){
        console.log(`${this.name} make a generic sound`);
    }
}

class Cat extends Animal {
    makesound() {
        console.log(`${this.name} says meow`);
    }
}

const myCat= new Cat('Whiskers');
myCat.makesound();


lec 22. Static Method
make method in one class and access it in second class.