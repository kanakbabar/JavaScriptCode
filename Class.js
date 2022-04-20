// Class => class is blue print of object. JavaScript ECMAScript 5, does not have class type.  class used for creating object templates.


class user
{
    constructor(name , age)
    {
        this.name=name;
        this.age=age;
    }
}
var obj = new user('kanak',22);
var obj1 = new user('karan',25);
console.log(obj);
console.log(obj1);




class User1
 {
     constructor(name,age)
     {
          this.name=name;
          this.age=age;
     }
     fullname()
     {
         console.log('fullname',this.name);
     }
 }

 const user2=new User1('kanak',22);
// const user3=new User1('karan',25)
 console.log(user2.fullname());
