// String =>  it is sequence of one or more characters .


// Properties and Methods -
//1] lenght =
var x='kanak';
console.log(x.length);

// 2] slice =
console.log(x.slice(1,4));

// 3] substring =
console.log(x.substring(1,5));

// 4] substr =
console.log(x.substr(1,5));

// 5] replace =
console.log(x.replace('kanak','babar'));

// 6] toUpper ane toLower case =
console.log(x.toUpperCase());
console.log(x.toLowerCase());

// 7] Concat =  joint two or more string 
var a='kanak';
var b= 'babar';
var c=a.concat(" ",b);
console.log(c);

// 8] trim =   remove the spaces around the string
var d ='    kk    ';
console.log(d.trim());

// 9] charAt =
console.log(a.charAt(0));

var s= a[1];          // character in perticular index
console.log(s);

// 10] split =
text ='kanak';
console.log(text.split(""));

// 11] indexOf =  calculate the perticular index of character
console.log(x.indexOf("k"));


// 12] lastindexOf =  calculatye lastindexog character
console.log(x.lastIndexOf("a"));


// 13] search =
console.log(x.search('k'));


// 14] startwith =
console.log(x.startsWith('k'));

// 15] endwith =
console.log(x.endsWith('k',2));

// 16] includeds =
console.log(x.includes('a'));

 

