// getter setter method =. it is use for get or set the value of an object.
// get - used to get value.
// set - used to set the value.



class User {
    constructor(name) {
    this.name = name;
    }
    
    set setName(x) { // setter
    this.name = x;
    }
    
    get getName() { // getter
     return this.name;
    }
    
    
   }
   
   const user1 = new User();
   user1.setName = 'superman';
   
   console.log( user1.getName);