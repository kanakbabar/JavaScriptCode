//  Peak element -


var PeakElement = (num)=>{
    for(let i=0;i<num.length-1;i++){
        if(num[i]>num[i+1]){
            return i;
        }
    }
}
console.log(PeakElement([1,2,5,3,1]));


/*
num[0]>num[1]  =>  1>2    false
num[1]>num[2]  =>  2>3     false
num[2]>num[3]  =>  5>3     true
*/