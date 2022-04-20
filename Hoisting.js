// Hoisting => Hoisting is JavaScript's default behavior of moving declarations to the top.

// variables -
 var a;                // not work
 console.log(a);
 a=10;

 var b=10;
 console.log(b);       // it work

/* x=10;
 console.log(x+y);   // not work
 y=20;*/


// console.log(c);   // not work
 var c =
 {
     name :'kanak'
 }
 console.log(c);


 d();             //both are work
 function d(){
     age=22;
     console.log('value :',age);
 }
 d();


 //console.log(k());   // not work
 var k=()=>
 {
    return'kanak';
 }
 console.log(k());


 var jk =(() => {console.log('hello world');})();
 



