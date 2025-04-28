// Assigning a value
num1 = 4;
num2 = "4";

// Is the same

if (num1 == num2) {
    console.log("Both numbers are the same");
} else {
    console.log("Both numbers are different");
}

// Is the same (strict)

if (num1 === num2) {
    console.log("Both numbers are the same data type");
} else {
    console.log("Both numbers are different data types");
}

// Is different

if (num1 != num2) {
    console.log("Both numbers are different");
} else {
    console.log("Both numbers are the same");
}

//Is different (strict)

if (num1 !== num2) {
    console.log("Both numbers are different data types");
} else {
    console.log("Both numbers are the same data type");
}

// And operator

if (num1 == 4 && num2 == 4) {
    console.log("Both numbers are the same")
} else {
    console.log("Both numbers are different")
}

//Or operator

if(num1 == 4 || num2 == 4) {
    console.log("One or both variables are 4")
} else {
    console.log("Neither variable is 4")
}