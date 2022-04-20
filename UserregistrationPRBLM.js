//   uc1 - first name [minimum three character .]
/*var reg = /[A-Z]{1}[a-z]{2,}$/;
var str ='Kan';
if(reg.test(str))
{
    console.log('pattern matched .');
}
else
{
    console.log('pattern not matched .');
}*/




// uc2 - lastname[minimum 3 character]
/*var reg = /[A-Z]{1}[A-Za-z]{2,}$/;
var str ='Kanak';
if(reg.test(str))
{
    console.log('pattern matched .');
}
else
{
    console.log('pattern not matched .');
}*/



// uc3 - email(E.g. abc.xyz@bl.co.in)
/*var reg = /^[A-Za-z0-9]+([.+-_][A-Za-z0-9]+)*[@][a-zA-Z0-9]+[.][A-Za-z]+([.][A-Za-z]+)?$/;
var str ='kanakbabar999@gmail.com';
if(reg.test(str))
{
    console.log('pattern matched .');
}
else
{
    console.log('pattern not matched .');
}*/



// uc4 -  phone number
/*var reg = /^[0-9]{10}$/;
var str ='9960206981';
if(reg.test(str))
{
    console.log('pattern matched .');
}
else
{
    console.log('pattern not matched .');
}*/




// uc5 -   password minimum 8 character 
/*var reg = /^[a-zA-Z0-9_!-+@#$]{8,}$/;
var str ='jkkjc784@#1';
if(reg.test(str))
{
    console.log('pattern matched .');
}
else
{
    console.log('pattern not matched .');
}*/



// uc6 -   atleast one upper case
/*var reg = /^(?=.*[a-z0-9A-Z])(?=.*[A-Z]).{8,}$/;
var str ='abcABC1234';
if(reg.test(str))
{
    console.log('pattern matched .');
}
else
{
    console.log('pattern not matched .');
}*/





// uc7-   numeric no in password
/*var reg = /^(?=.*[a-z0-9A-Z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
var str ='aAbc..123xyz';
if(reg.test(str))
{
    console.log('pattern matched .');
}
else
{
    console.log('pattern not matched .');
}*/




// uc8 -
/*var reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[~`!@#$%^&*_+=,./?]).{8,}$/;
var str ='Abc?456~@3XYZ';
if(reg.test(str))
{
    console.log('pattern matched .');
}
else
{
    console.log('pattern not matched .');
}*/




// uc9 -
var reg = /^[A-Za-z0-9]+([.+-_][A-Za-z0-9]+)*(([@][a-zA-Z0-9]{1,}){1})+([.][A-Za-z]{2,3})+(([.][A-Za-z]{2,3}))?$/;
var str ='kanak123babar@yahoo.com';
if(reg.test(str))
{
    console.log('pattern matched .');
}
else
{
    console.log('pattern not matched .');
}
