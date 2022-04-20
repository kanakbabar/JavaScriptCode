// Array => it is special variables that holds more than one value.


// first way to create array -
const arr =[1,2,3,4,5];
console.log(arr);

// second way to create array -
const car =[];
car[0]=1;
car[1]=21;
car[2]=10;
console.log(car);


// third way to create array -
const c= new Array(1,2,3,4,5,6);
console.log(c);


// we get third index values.
console.log(arr[2]);  


// change the value -
const k=['kanak','babar'];
k[0]='hello world';
console.log(k);

// at position get value -
console.log(k[1]);


// length of array -
console.log(k.length);


// sort array -
console.log(k.sort());

// using push method add the element in array -
k.push('sangali');
console.log(k);


// tostring - converts an array to a string of (comma separated) array values.
console.log(k.toString());


// join - it is like to to string but separate the spl separator.
console.log(k.join('**'));    // any symbols are you used


// pop - remove last element in array .
console.log('pop element :' ,k.pop());
console.log(k);

// shift - remove first element in array .
console.log('removed element :',k.shift());


// unshift - added element in begining of array.
console.log(k.unshift('vita'));
console.log(k);

// check length of array -
console.log(k.length);

// delete element in array -
console.log(delete k[0]);
console.log(k);


// concat - adding anotrher array with declared array .
const a=[1,2,5,7,8];
var x=k.concat(a);
console.log(x);


// splice - added element in array.
console.log(x.splice(2,0,"hi",'sandesh'));
console.log(x);

// splice used to remove element in array.
console.log(x.splice(1,2));
console.log(x);


// slice  - remove elelement in array.
console.log(x.slice(1));
console.log(x);

console.log(x.slice(1,3));  // give the range of removing element .
console.log(x);


// sort and reverse 
var d=[1,5,78,6,2,5,5];
console.log(d.sort());
console.log(d.reverse());





