// set => 
//         A JavaScript Set is a collection of unique values. Each value can only occur once in a Set. A Set can hold any value of any data type.


const set1=new Set([1,2,3,4,5,6,7,8,9]);
console.log(set1);

//size -
console.log('size of set :',set1.size);

//add -
set1.add(11);
set1.add(123);
console.log(set1.size);

//add variables -
const a='h';
set1.add(a);
console.log(set1.size);

// values -
console.log(set1.values());

// keys -
console.log(set1.keys());

// entries -
console.log(set1.entries());

//typeof -
console.log(typeof set1);


for(let i in set1)
{
    console.log(i);
}


// has -
console.log(set1.has(1));

// delete -
console.log(set1.delete(1));
console.log(set1.has(1));

//clear -
set1.clear();
console.log(set1.size);