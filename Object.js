//  object =>
//  object is an entity having state and behavior (properties and method).

// way one -
const a=
{
    name : 'kanak',
    lname: 'babar',
    age:22
}
console.log(a);

// suppose we print only one value then 

console.log(a.name);

//  suppose we adding function in object then

/*const user1={
    name : 'farari',
    canrun:
    {
        function (){console.log('car can run');}
    }
    };
    console.log(user1.canrun());*/


    // Different way to define object -
    // 1] first way (object literal) -
    const z=
    {
        name : 'kanak',
        age:22
    }
    console.log(z);

    // 2] new operator -
   function car(name , age)
   {
       this.name=name;
       this.age=age;
   }
   var s = new car('karan',25);
   console.log(s);

   // 3] object.Create method -
   var vehicle =
   {
       model:'audi',
       color:'black'
   }
   var l= Object.create(vehicle);
   console.log(l.color);

   // way -
   const bird = {
    size: 'small',
  };
  const k = bird;
  k.canFly = true;
  console.log(k)