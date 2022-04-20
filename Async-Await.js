// async makes a function return a Promise
//await makes a function wait for a Promise


//  1]
const resolveFun = () => {
    return new Promise((resolve, reject) => {
      setTimeout(()=> {
       resolve('Successfully resolve');
       }, 2000);
    });
   }
   
   async function asynCall() {
   try {
   const data = await resolveFun();
   console.log('asynCall Function', data);
   } catch(error){
     console.log('error:---', error);
   } finally {
   console.log('Finally:---');
   }
   }
   
   asynCall();


   