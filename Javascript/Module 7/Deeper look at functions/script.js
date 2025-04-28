// Function with Parameter
function greet(name) {
    console.log("Hello, " + name + "!"); // Uses the parameter
}
// Replaces the parameter (name) with values
greet("John");
greet('Alice');

// Normal function
function sayHello() { //User defined function
    console.log('Hello!')
}

//Object with a method
const person = {
    name: 'John',
    greet: function() { //Inside an object so is a method
        console.log('Hello, my name is ' + this.name);
    }
}

sayHello();
person.greet();

// Find out area of rectangle
function calculateRectangleArea(length, width) {
    return length * width;
}

const area1 = calculateRectangleArea(5,3);
console.log('Area1: ' + area1);

const area2 = calculateRectangleArea(7,4);
console.log('Area 2: ' + area2);
