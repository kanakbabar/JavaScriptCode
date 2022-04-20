// Promise => it is object that links producing code and consuming code. producing code that can take some time. consuming code must wait for result.
//            it is used for performed asynchronous function.


/*function fun1()
{
    return new Promise(function(resolve,reject)
    {
        setTimeout(()=>
        {
            const error=true;
            if(!error){
            console.log('your promise is resolved .');
            resolve();
            }
            else
            {
                console.log('not resolved');
                rejected('sorry');
            }
        },2000);

    })
}
fun1().then(function(){
    console.log('thanks');
}).catch(function(error)

{
    console.log('very bad',+error);
})*/


const count = true;

let countValue = new Promise(function (resolve, reject) {
    if (count) {
        resolve("There is a count value.");
    } else {
        reject("There is no count value");
    }
});

console.log(countValue);