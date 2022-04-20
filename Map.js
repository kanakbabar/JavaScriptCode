// Map => A Map holds key-value pairs where the keys can be any datatype.
//        A Map remembers the original insertion order of the keys.

// Methods in maps -

// create map -
const a = new Map
([
 ['kanak',1],
 ['sandesh',2],
 ['babar',3]
]);
console.log(a);
console.log(a.get('kanak'));


// another way to create map -
const b= new Map();
b.set('kanak',11);
b.set('babar',22);
console.log(b);


// change the value -
console.log(a.set('kanak',100));


// get - for getting value of key -
console.log(a.get('kanak'));


// size - get the number of element -
console.log(a.size);


//  delete - deleting element -
console.log(a.delete('kanak'));
console.log(a.size);


// has -method returns true if a key exists in a Map -
console.log(a.has('babar'));
console.log(a.has('kanak'));


