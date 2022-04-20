// weakset => it contain only object.

 const w=new WeakSet();
 const a=
 {
     name:'kanak',
     lname:'babar'
 }
 w.add(a);
 console.log(w);

 //has-
 console.log(w.has(a));

 //delete -
 console.log(w.delete(a));
 console.log(w.has(a));