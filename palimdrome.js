// palimdrome number -
num=121;
let originalNum = num;
let rev = 0;

while(num !=0){
    rev = (rev*10)+(num%10);     //  rev=(0*10)+(121%10) = 12   , rev=1 
    num = parseInt(num/10);       // num =121/10 = 1 ,num=12/10 =2  ,num=1/10=1
}
if(originalNum == rev){
    console.log(rev+" is Palindrome Number");
}else{
    console.log(originalNum+" is not Palindrome Number");
}


// palimdrome string -
function checkpalimdrome(string)
{
    const len = string.length;
    for(let i=0;i<len/2;i++)
    {
    if(string[i]!==string[len-1-i]){return 'it is not palimdrome'}
    }
    return ' it is palimdrome';
}
const string = prompt('enter a string');
const value = checkpalimdrome(string);
console.log(value);