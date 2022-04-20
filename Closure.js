//  Closure =>  A closure is the combination of a function bundled together (enclosed) with references to its surrounding state. 
//               In other words, a closure gives you access to an outer function's scope from an inner function.
//              In JavaScript, closures are the primary mechanism used to enable data privacy .       



function out()
{
    function inner()
    {
        return 'kanak';
    }
    return inner;
}
 var a=out();       // closure 
 var b=a();
 console.log(b);




 function add(k)
 {
     function sub(l)
     {
         return k*l;
     }
     return sub;
 }
 var adding=add(10);               // closure
 var substraction =adding(3);
 console.log(substraction);