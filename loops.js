//for, while, do-while are same as in other languages
//New is for-of & for-in

/*-----------for-of loop (used for string & array but not for object)----------- */

let str="Dharmik"
let size=0;

for(let i of str){
    console.log("i=", i);
    size++;
}
console.log("String size = ", size)

/*-----------for-in loop (used for object & array)----------- */

const student = {
    name:"Dharmik",
    age:21,
    cgpa : 9,
    isPass: true,
};

for(let key in student){
    console.log("Key=",key, "Value=", student[key]);
}