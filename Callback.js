// callback => A callback is a function passed as an argument to another function This technique allows a function to call another function
//             A callback function can run after another function has finished


const fun = (name, callBackFun,callBack) => {
    console.log('My Name Is:', name);
    callBackFun();
    };
    
    const callBackFun = () => {
    console.log('This is callback Fun');
    }
    
    const callBack = () => {
        console.log('calling settimeout');
        }
        setTimeout(callBack, 100);
    fun('Krishna', callBackFun,callBack); 
    