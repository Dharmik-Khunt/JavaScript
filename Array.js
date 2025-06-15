let name=["dharmik","Krish","Harshad","deep","Yash"];

name.push("Aryan");   //push(): add to end
console.log(name);

name.pop();   //pop(): delete from end & return
console.log(name);

console.log(name.toString());   //toString(): convert array to string

name.unshift("Khush");   //unshift(): add to start
console.log(name);

name.shift();   //shift(): delete from start
console.log(name);


console.log(name.slice(1,3));   //slice(): returns piece of array also does not change original array

name.splice(2,1,"Harsh");//splice(): change original array(add,remove,replace), splice(startIdx,delCount,newE)
console.log(name);

/**--------------------Some more Array Methods------------------- */

let nums=[2,3,4,5]

//Map: Creates a new array with the results of some operation. The value its callback returns are used to form new array
let newArr= nums.map((val) => { 
    return val*2;
});
console.log(newArr);

// Filter: Creates a new array of elements that give true for a condition/filter.
let evenArr= nums.filter((val) => { 
    return val%2==0;
});
console.log(evenArr);

//reduce: Performs some operations & reduces the array to a single value. It returns that single value.
let sum= nums.reduce((res,cur) => { 
    return res + cur;
});
console.log(sum);