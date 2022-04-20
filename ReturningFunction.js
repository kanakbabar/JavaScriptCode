//  Returning function => The return statement is used to return a particular value from the function to the function caller.


function outer()
{
    function ineer()
    {
        return 'kanak';
    }
    return ineer;
}
var ReturningFun = outer();
var Returning = ReturningFun();
console.log(Returning);



function add(a)
{
    function sub(b)
    {
        return a*b;
    }
    return sub;
}
var j=add(5);
var jk=j(10);
console.log(jk);