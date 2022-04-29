//  pyramid -
let n = 5;
let string = "";
// External loop
// for row 
for (let i = 1; i <= n; i++) {
  // printing spaces
  // for column
  for (let j = 1; j <= n - i; j++) {      // j=1 r , j=5c  // j=2 ,j=4
    string += " ";
  }
  // printing star
  for (let k = 0; k < 2 * i-1 ; k++) {    //2*1-1=1  ,2*2-1 =3
    string += "*";
  }
  string += "\n";
}
console.log(string);


// reverse pyramid -
let m = 5;
let num = "";
// External loop
for (let i = 0; i < n; i++) {
  // printing spaces
  for (let j = 0; j < i; j++) {
    num += " ";
  }
  // printing star
  for (let k = 0; k < 2 * (n-i) - 1; k++) {   //2*(5-0)-1=9
    num += "*";
  }
  num += "\n";
}
console.log(num);