/*------------Template literal--------------*/
//it is special type of string which is used to insert the value of variable inside the string.

let obj={
    item:"pen",
    price:10,
};
let output = `The cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);