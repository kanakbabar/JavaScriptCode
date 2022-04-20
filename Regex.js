// Regex => it is object . it is used to matching pattern.

let reg =/kanak/g;            //g means global
let reg1=/KANAK/i;            // i mean both match capital or small
let str = 'hello kanak';
let result = reg1.exec(str);
console.log(result);


console.log(result.input);    // gives str


console.log(result.index);     // gives index =6


let result1 = reg1.test(str);    // gives boolean value if present or not.
console.log(result1);

let result2 = str.match(reg1);
console.log(result2);               // match and gives null or result.


let result3= str.search(reg1);     // it search then return index or -1.
console.log(result3);


let result4 = str.replace(reg,'shubham');
console.log(result4);

////////// symbols =>

let r=/kanak/;   

let s='hello kanak how are you kanak';
let R1=r.exec(s);
console.log(R1);

if(r.test(s))
{
   console.log('match expression');
}
else
{
    console.log('does not match expression');
}


let r1=/^hello/;            //str start with 
let s1='hello kanak how are you kanak';
if(r1.test(s1)){console.log('match expression');}
else{ console.log('does not match expression');}


let r2=/hello$/;            //str end with 
let s2='hello kanak how are you kanak';
if(r2.test(s2)){console.log('match expression');}
else{ console.log('does not match expression');}


let r3=/k.nak/;            // match any one character
let s3='hello kanak how are you kanak';
if(r3.test(s3)){console.log('match expression');}
else{ console.log('does not match expression');}


let r4=/k*nak/;            //  match one or more character
let s4='hello kanak how are you kanak';   // let s4='hello kaxcvbnnak how are you kanak'; -it match
if(r4.test(s4)){console.log('match expression');}
else{ console.log('does not match expression');}


let r5=/ka?nak?/;            // optional before character of ?.  
let s5='hello kna how are you kanak';    //1.kana  2.kanak 3.knak  == match   , kanaj - not match because only a or k optional only
if(r5.test(s5)){console.log('match expression');}
else{ console.log('does not match expression');}


let r6=/k\anak/;            //  exact match
let s6='hello kanak how are you kanak';
if(r6.test(s6)){console.log('match expression');}
else{ console.log('does not match expression');}



////////// characters =>

let ex=/^h/i;
let st='hello kanak';
let rlt = ex.exec(st);
console.log(rlt);

if(ex.test(st)){console.log('match');}
else{console.log('not match');}



let ex1=/h[a-z]llo/i;             // [a-z] character
let st1='hello kanak';
if(ex1.test(st1)){console.log('match');}
else{console.log('not match');}



let ex2=/h[ked]llo/;             // specific character   [fgh]=not match.
let st2='hello kanak';
if(ex2.test(st2)){console.log('match');}
else{console.log('not match');}



let ex3=/h[^abc]llo/;             //  ^ work as not 
let st3='hello kanak';
if(ex.test(st3)){console.log('match');}
else{console.log('not match');}


let ex4=/h[A-Za-z]llo/;             //  capital or small
let st4='hello kanak';
if(ex4.test(st4)){console.log('match');}
else{console.log('not match');}



let ex5=/h[A-Za-z]ll[0-9]/;             //  number
let st5='hell9 kanak';
if(ex5.test(st5)){console.log('match');}
else{console.log('not match');}


let ex6=/hel{2}o/;             //  quantifier     /hel{0,2}o/   0 or 1,2 times 
let st6='hello kanak';
if(ex6.test(st6)){console.log('match');}
else{console.log('not match');}


let ex7=/(hel){2}/             // groupings
let st7='helhel';
if(ex7.test(st7)){console.log('match');}
else{console.log('not match');}



//////// shorthand character clasess =>

let ex8=/\wak/;                    //\w use to match character in words   /w+ak/ match before ak
let st8=' @!##kanak';
if(ex8.test(st8)){console.log('match');}
else{console.log('not match');}


let ex9=/\d99/;                    // digit after 99 match
let st9='99999';          //  8999  - also match
if(ex9.test(st9)){console.log('match');}
else{console.log('not match');}


let ex10=/number \d+/;                    //more than one digit
let st10=' number 2578545';  //numberasdf25785 -not match
if(ex10.test(st10)){console.log('match');}
else{console.log('not match');}


let ex11=/\skanak 999/;                    //whitespace    S capital s means not white space
let st11='kanak 999';
if(ex11.test(st11)){console.log('match');}
else{console.log('not match');}


let ex12=/k(?=a)/;                    // a after k char then it will match  /k(?!=a)/ after k without a all match
let st12='kanak 999';
if(ex12.test(st12)){console.log('match');}
else{console.log('not match');}







