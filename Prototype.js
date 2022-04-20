// Prototype => inherite the properties and method from prototype.  
//              it is global properties which available with almost all the object .



function proto(fname,lname,age)
{
   this.fname=fname;
   this.lname=lname;
   this.age=age;
}
var father= new proto('sandesh','babar',55);
var mother = new proto('madhavi','babar',45);
console.log('father imformationm :' +father.age ,'mother imformation :'+mother.age);


// you can not add a new property to an existing object constructor:



function p(n,a)
{
this.n=n;
this.a=a;
}
p.language ='english';
var x=new p('kanak',22);
var y= new p('karan',25);
console.log(x.language);   // show undefined it mean we can not add new properties 



/*All JavaScript objects inherit properties and methods from a prototype:

1. Date objects inherit from Date.prototype
2. Array objects inherit from Array.prototype
3. Person objects inherit from Person.prototype
    The Object.prototype is on the top of the prototype inheritance chain:

    Date objects, Array objects, and Person objects inherit from Object.prototype.*/



    // The prototype property allows you to add new methods to objects constructors  /***/ it not work
    
    function q(n,a)
    {
    this.n=n;
    this.a=a;
    }
   // q.prototype.language ='english';
   q.prototype.languaue = function()
   {
       return this.n +" "+this.a;
   }
    var x=new p('kanak',22);
    var y= new p('karan',25);
    //console.log(x.language); 
    console.log(q.language);

 