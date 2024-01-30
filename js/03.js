let a=[1,2,3,4,5,6,7,8,9,0,-3]
let max=0;
let min=Infinity;
a.forEach(function(val){
    if(max<val){
        max=val;
    }
    if(min>val){
        min=val;
    }
})
console.log("max is ",max,"min is ",min);