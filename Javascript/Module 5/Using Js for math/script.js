// Addition

let a = 10;
let b = 5;

let sum1 = a + b;
console.log(sum1);

// Subtraction

let c = 80;
let d = 36;
let sum2 = c - d;

console.log(sum2)

// Multiplication 

let e = 6;
let f = 8;

let sum3 = e * f;
console.log(sum3);

// Division

let g = 72;
let h = 8;

sum4 = g / h;
console.log(sum4);

// Remainder

let i = 67;
let j = 6;

sum5 = i % j;
console.log(sum5);

// Concatenation (string)

let firstName = "Jack";
let lastName = "Roe";
let age = 18;

let fullName = firstName + " " + lastName;
console.log(fullName);

// Concatenaiton (numbers)

let num1 = 56;
let num2 = "3";

let conc = num1 + num2;
console.log(conc);

// Re-assigning

let num = 50;

let sum = (num += 10);
console.log(sum);

// Method

let value = -4.32;
let absoluteValue = Math.abs(value);
let roundedValue = Math.round(value);
let randomValue = Math.random();

console.log(absoluteValue);
console.log(roundedValue);
console.log(randomValue);

// Average

let numberList = [5, 10, 15, 20, 25];
let equal = 0;

for (let k = 0; k < numberList.length; k++) {
    equal += numberList[k];
}

let average = equal / numberList.length;
console.log("Average: ", average);