function sayMyName() {
    console.log("s");
    console.log("a");
    console.log("n");
    console.log("j");
    console.log("a");
    console.log("y");
}//its afunction defination

sayMyName//function reference

// sayMyName()   //function call

// function addTwoNumbers(number1,number2) {// here number1 and number2 is parameters
//     console.log("Result : ",number1+number2);
// }
// addTwoNumbers(3,4);//here 3 and 4 is arguments

function addTwoNumbers(number1, number2) {// here number1 and number2 is parameters
    return number1 + number2;
}
const result = addTwoNumbers(3, 5);
// console.log(result);

// function loginUserMessage(userName){
//     // if(userName===undefined){
//     //     console.log("Please enter the name");
//     //     return;
//     // }
//     if(!userName){ //undefined and emty stirng ("") is consider as a false value
//         console.log("Please enter the name");
//         return;
//     }
//     return `${userName} is logged in`;
// }
function loginUserMessage(userName = "sam") {//here string sam is passed as a default parameter 
    // if(userName===undefined){
    //     console.log("Please enter the name");
    //     return;
    // }
    if (!userName) { //undefined and emty stirng ("") is consider as a false value
        console.log("Please enter the name");
        return;
    }
    return `${userName} is logged in`;
}

console.log(loginUserMessage("sanjay"));
console.log(loginUserMessage());//if user don't pass anything in output you got undefined 

function calculateCartPrice(vall1,vall2,...values){
    return values;
}
console.log(calculateCartPrice(100,200,300,400));

const user ={
    username:"sanjay",
    price:300
}
function handleObject(anyObject){
    console.log(`user name is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user);
handleObject({
    username:"sam",
    price:400
})

const myNewArray = [200,300,400,500];
function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([500,700,800]));
