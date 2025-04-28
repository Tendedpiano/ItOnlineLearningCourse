//User Class

class User {
    constructor(name,age,email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
}

const userObject = new User("Jack Roe", 18, "jackroe749@gmail.com");
console.log(userObject);

const nameHTML = "<h1>Hello " + userObject.name + "</h1>";

document.body.innerHTML = nameHTML;