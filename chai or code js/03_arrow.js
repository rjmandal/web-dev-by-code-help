const user = {
    username :"sanjay",
    price: 300,
    welcomeMessage: function (){
        console.log(`${this.username} welcome to this site`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username="hitesh";
// user.welcomeMessage()
// console.log(this);

// function chai() {
//     let username="sanjay"
//     console.log(this.username);//this keyword does not work in function it only works in objects so it gives undefied as a output
// }

// chai()


// const chai = function chai() {
//     let username="sanjay"
//     console.log(this.username);//this keyword does not work in function it only works in objects so it gives undefied as a output
// }
// chai()

//  const addTwo =(num1,num2)=>{
//     return num1+num2
//  }
//  const addTwo =(num1,num2)=> num1+num2 //explicit return
//  const addTwo =(num1,num2)=> (num1+num2) //explicit return
 const addTwo =(num1,num2)=> ({username:"sanjay"}) //explicit return object 
 console.log(addTwo(3,4));
