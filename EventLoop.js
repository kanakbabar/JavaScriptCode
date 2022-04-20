// EventLoop => it is constantly running process that monitor by callstack and call queue.

// synchronous - it is sequencial execution . it first go to the call stack after it printed in console after poped in call stack.
console.log('first loop');
console.log('second loop');
console.log('third loop');



console.log('1st');      // first print 1st and 3rd 2nd go to api web and they hold in call queue after empty call stack it go on call stack and after printe and poped in callstack.
setTimeout(()=>
{
console.log('2nd');
},2000);
console.log('3rd');



console.log('Welcome');

let promise =  Promise.resolve('Welcome to promise'); // promise go to call stack after api web after js machine after it store micro callqueue .
promise.then((res) => {
console.log(res);
}).catch();

setTimeout(() => {
console.log('Welcome to setTimeout');  // set time go to call stack to api web after it go to call stack .
}, 2000);
console.log('End of the code');   // first print promise and after settime because micro queue have have first reference.
                 //  but it waiting to empty call stack ater it go call stack after it printed on console and after it is poped in call stack.

