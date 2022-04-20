// missing number -



let arr = [9,6,4,2,3,5,7,0,1];
// arr = [1,2,3,4,6,7,8];
// arr = [3,0,1];
const missingNumber = (arr) => {
     let sum = 0;
     let missingCount = 0;
    
     for(let i=0;i<arr.length+1;i++){
            //console.log(i);
            sum += i;
           // console.log(sum);

            if(arr[i]){
                //console.log(arr[i]);
                missingCount += arr[i];
                console.log(missingCount);
            }
     }
     return (sum - missingCount)
};

console.log(missingNumber(arr));