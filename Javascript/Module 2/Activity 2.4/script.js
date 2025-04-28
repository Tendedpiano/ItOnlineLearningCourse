// Declared Variable and if statement

var myAge = 19

if (myAge >= 18) {
    console.log("You are an adult!");
} else {
    console.log("You are a child!");
};

// Named function

function consoleText() {
    console.log("This text comes from a named variable");
};

// Conditional statement

let book = 2;
switch (book) {
    case 1:
        console.log("Horrible Histories");
        break;
    case 2:
        console.log("House of Leaves");
        break;
    case 3:
        console.log("IT");
};

// Array and loop

let stringArray = ["Pizza", "Burger", "Fried Chicken", "Wrap"]

for (let i = 0; i < stringArray.length; i++) {
    console.log("String array element:", stringArray[i]);
};

// Objects

var person = {
    firstName: "Jack",
    lastName: "Roe",
    age: 18,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

console.log("Your name is ",person.fullName(), " and you are ", person.age, " years old.")