// closers 
function one() {
    const userName="sanjay"
    function two() {
        const website ='youtube'
        console.log(userName);
    }
    // console.log(website);//gives error webiste it not access outside of the scope
    two()
}
// one()

// hoisting is access function before declaration or defination but if you define the function and string it in a variable then you cannot acess the function before defination 



