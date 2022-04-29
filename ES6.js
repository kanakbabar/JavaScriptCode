//Es6 =>   avaScript ES6 (also known as ECMAScript 2015 or ECMAScript 6) is the newer version of JavaScript that was introduced in 2015.
//         ECMAScript is the standard that JavaScript programming language uses. ECMAScript provides the specification on how JavaScript programming language should work.




// javascript let variable  - it have only block scope mean it is acessible only inside the block .
let a= 'kanak';
{
    let a='karan';
    console.log(a);   // print karan
}
console.log(a);   // kanak



// const - it declare constat value.
const b='babar';
console.log(b);



//  function -
let x=function(x,y)
{
    return x*y;
}
var s= x(12,15);
console.log(s);



// Arrow function -
let t=(a,b)=>
{
   return a+b;
}
let e=t(10,5);
console.log(e);


// class -
class Person {
    constructor(name) {
      this.name = name;
    }
  }
  const person1 = new Person('John');
  console.log(person1.name); // John


  
  // Default value parameter -
  function c(x,y=6)
  {
     console.log(x*y);
  }
 // c(5);   //30
c(1,2);      //2




// Template literals -
const first_name = "Jack";
const last_name = "Sparrow";
console.log(`Hello capton ${first_name} ${last_name}`);



// Destructing -
// we write in js like this
const person = {
    name: 'Sara',
    age: 25,
    gender: 'female'    
}
let name = person.name;
let age = person.age;
let gender = person.gender;
console.log(name); // Sara
console.log(age); // 25
console.log(gender); // female

//using es6 we write 
const Person1 = {
    Name: 'kanak',
    Age: 22,
    Gender: 'female'    
}
let { Name, Age, Gender } = Person1;
console.log(Name); // Sara
console.log(Age); // 25
console.log(Gender); // female



/*// import export -
// export
export default function contact(name, age) {
    console.log(`The name is ${name}. And age is ${age}.`);
}

import contact from './contact.js';

contact('Sara', 25);
// The name is Sara. And age is 25



// promise -
// returns a promise
let countValue = new Promise(function (resolve, reject) {
    reject('Promise rejected'); 
 });
 
 // executes when promise is resolved successfully
 countValue.then(
     function successValue(result) {
         console.log(result); // Promise resolved
     },
  )*/


  // Rest parameter -
  function show(a, b, ...args) {
    console.log(a); // one
    console.log(b); // two
    console.log(args); // ["three", "four", "five", "six"]
  }
  
  show('one', 'two', 'three', 'four', 'five', 'six','sewven','nine');



  // Spread parameter -
  let arr1 = [1,2,3,4,5];
let arr2 = [...arr1, 'three', 'four', 'five'];
console.log(arr2); 