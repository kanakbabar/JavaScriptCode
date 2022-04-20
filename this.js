// this => this keyword refers to aobject that executing current piece of code.


const f=
{
    fname:'kanak',
    lname:'babar',
    fullname :
     function fun()
{
  return this.fname +" "+this.lname;
}
    
}
console.log(f.fullname());


// 2.
"use strict"
let x=this;
console.log(x);