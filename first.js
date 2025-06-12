console.log("First Js code !!");

/* ---------------- variable and data type -----------------------*/

r= 100;     /* variable declaration*/
console.log(3.14*r*r); /*to print the value of variable */
 
let age = 21;       // variable cannot be re-declared but can be updated. A block scope variable
console.log(age);

const name="Dharmik";      // variable cannot be re-declared or updated. A block scope variable
console.log(name);

/*------------------------Object declaration----------------*/

const student = {
    name:"Dharmik",
    age:21,
    cgpa : 9,
    isPass: true,
};
student.cgpa = student.cgpa-1;
console.log(student.cgpa);


/*----take input from user-----------*/

let num = prompt("Enter a num: ");
if(num%5===0)
{
    console.log(num ,"is multiple of 5");
}else{
    console.log(num ,"is not multiple of 5");
}