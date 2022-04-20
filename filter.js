// filter -
/*
const arr = [1,3,2,4,5,3,5,7];
 const callback = (e) => {
if(e > 3) {
return e;
}
}; 
 const obj = arr.find((e) => e === 2); 

 const filteredArr = arr.filter((e) => e > 3); 

 arr.forEach((item) => {
console.log(item);
}); 

 const arr1 = arr.map((item) => {
return item * 2;
});



// reduce -

const data = arr.reduce((arr, item) => {
    const arg = item * 2;
    arr.push(arg);
    return arr;
    }, []);
    
    const data1 = arr.reduce((count, item) => {
    count = count + item;
    return count;
    }, 0);
   console.log(data);
   



   // find -
   const a=[1,2,3,4,5,6,7,8,9];
const objs=a.find((e)=>e===2);
console.log(objs);



// reduce -
const a1=a.map((item)=>
{
    return item*3;
});
console.log(a1);

const a2 =a.reduce((count,item)=>{count =count+item},0);
console.log(a2);*/


// reverse -

var array = [1,3,5,7,9]
function bigger(){return 'call back function with reverse';}

function reverseArray(data,testfn){
  return data.reverse(e=> testfn(e))}

console.log(reverseArray(array,bigger))


// splice -



