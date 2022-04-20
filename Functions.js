//  Functions =>
// -  function is a block of code designed to perform a particular task.
// - it is increse the code reusualbility and save the time.


// 1] Normal functions -

function f()                // first way 
{
    name = 'kanak';
console.log('hello world',name);
}
f();

// second way passing parameters

function s(p1,p2)
{
    return p1*p2;
}
var x= s(2,5);
console.log(x);


// 2] Arrow function -

const a=()=>
{
    return 'kanak';
}
console.log(a());


// second way

const c=(a,b)=>
{
    return a*b;
}
console.log(c(2,5));