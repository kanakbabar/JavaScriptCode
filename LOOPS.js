// foreach loops -
arr=[1,2,3,4,5];
arr.forEach((item)=>{console.log(item);})
arr.forEach((item,i,data)=>{console.log(item,i,data);})


// for -  loops through a block of code a number of times.
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
   
}

// for in - loops through the properties of an object
for(let k in arr)
{
console.log(arr[k]);
}

// for of -  loops through the values of an iterable object
 for(let x of arr)
 {
     console.log(x);
 }


// while - loops through a block of code while a specified condition is true
i=0;
while(i<10)
{
    i++;
    console.log(i);
}


// do/while - also loops through a block of code while a specified condition is true
i=0;
do
{
    i++;
console.log(i);
}
while(i<10)