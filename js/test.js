let a=[1,2,3,4,5,6,7,8,9]
let sum=0;
let b=a.forEach(function(val){
    console.log(val);
    sum=sum+val;
})
console.log("sum of all elements in this array = ",sum)