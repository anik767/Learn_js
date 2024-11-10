

const a=20;
const b=10;

// = mins asign the value 
// == compare the value
// === compare the value and data type

if ((a>b ||a==b ) && a > 10) { 
    console.log("a is greater than b");
}
else{
    console.log("a is less than b")
}

// turnaty operator 

a >= b ? console.log("a is greater then b") : console.log("a is less then b") // singla line of if else statement


let istrue=true ;
let num=20;

num =  istrue ? console.log("istrue") : console.log("isfalse"); // ternary operator for assignment


istrue = true;

num = istrue === true ? num + 5 : num - 5;
console.log(num, typeof num);
