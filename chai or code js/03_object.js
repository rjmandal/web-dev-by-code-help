// singleton
// object.create
// object literals
const mySym = Symbol("key1")//we pass note or description in symbol
const user = {
    name :"sanjay",
    rollNo :2310987103,
    email :"rjsanjaymandal@gmail.com",
    lastLogin :false,
    "Full Name":"sanjay mandal",
    [mySym] :"mykey 1"
}

// Object.freeze(user)//this is used to make object unchangeble

// change the value of email
user.email ="rjsurajmandal@gmail.com"

console.log(user.email);//old way to access object element 

console.log(user["email"]);//new way to access object in javscript element

console.log(user["Full Name"]);
console.log(typeof user.mySym);

user.greeting = function(){
    console.log("hello");
}
user.greetingTwo = function(){
    console.log(`hello,${this.name}`);
}
console.log(user.greeting());
console.log(user.greetingTwo());