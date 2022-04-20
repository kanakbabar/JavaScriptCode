// nested function => Write one function inside another function. The nested (inner) function is private to its containing (outer) function. It also forms a closure.
//                   Nested function is private to containing function .we can not acess anywhere outside of function.


function outerrFun()
{
    function innerFun()
    {
        console.log('inner function .');
    }
    innerFun();
}
outerrFun();



function out(name)
{
    console.log('outer function value :',name);
    function inner(age)
    {
        console.log('inner function age value :',age);
    }
    inner(22);
}
out('kanak');