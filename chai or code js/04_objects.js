// const tinderUser=new Object() //singleton object made by using constructor
const tinderUser={} //object literal
tinderUser.id=1234
tinderUser.name="sanjay"
tinderUser.isLoggedIn=false
// console.log(tinderUser);

const regularuser={
    email:"some@gmail.com",
    fullName:{
        username:{
            firstName:"sanjay",
            lastName:"Mandal"
        }
    }
}//object literals

// console.log(regularuser.fullName.username) //if data is coming from database and fullName is not available we use 
// fullName? to avoid error

const obj1= {1:"a",2:"b"}
const obj2= {3:"a",4:"b"}
const obj3= {5:"a",6:"b"}

// const obj4={...obj1,...obj2} //using spread operator we merge the object 
// const obj4=Object.assign({},obj1,obj2,obj3) //using assign
// console.log(obj4);

const target= {a:1,b:2}
const source= {b:3,c:4}

const returnedTarget=Object.assign(target,source);//the object we give in first place it returned 
// all the values to the first object  
// console.log(target);

// console.log(target===returnedTarget);

const users=[{id:231,email:"someone@gmail.com"},{},{}];

// console.log(users[0].email);

// by using this we get keys and values as a array 
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// object destructuring
const course={
    price:999,
    courseInstructor:"sanjay"
}
// console.log(course.courseInstructor);//normal way to access object element
const {courseInstructor:instructor}=course;
console.log(instructor);



