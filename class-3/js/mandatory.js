/**
 * Mandatory task 1
 */

// 'this' in global context
function getThis() {
    console.log(this); // 'this' refers to window object
}
getThis();


// 'this' inside an object method
const myObj = {
    firstName: 'Borhan',
    lastName: 'Uddin',

    // object method with normal function
    getThis: function () {
        console.log(this); // 'this' refers to myObj
    },

    // object method with arrow function
    getSecondThis: () => {
        console.log(this); // 'this' refers to window object
    }
}
myObj.getThis();
myObj.getSecondThis();


const myFunc = {
    hobby: function () {
        return `${this.name} love to code & his favorite language is ${this.language}.`;
    }
};
const person1 = {
    name: "Borhan",
    language: "JavaScript"
};
console.log(myFunc.hobby.call(person1));


const myFunc2 = {
    javaScriptDeveloper: function (city, country) {
        return `JavaScript was developed by ${this.firstName} ${this.lastName} in 1995. He born in ${city}, ${country}.`;
    }
}
const person2 = {
    firstName: "Brendan",
    lastName: "Eich",
};
console.log(myFunc2.javaScriptDeveloper.call(person2, 'Pennsylvania', "United States"));



// calculate area
function findArea() {
    return this.width * this.height;
}

// rectangle
const rectangle = {
    height: 20,
    width: 10
};

// square
const square = {
    height: 15,
    width: 15
};

// rectangle area
const rectangleAreaWithCall = findArea.call(rectangle);
const rectangleAreaWithBind = findArea.bind(rectangle);
console.log(rectangleAreaWithCall, rectangleAreaWithBind());

// square area
const squareAreaWithCall = findArea.call(square);
const squareAreaWithBind = findArea.bind(square);
console.log(squareAreaWithCall, squareAreaWithBind());


// class
class User {
    constructor(name, email, isActive) {
        this.name = name;
        this.email = email;
        this.activity = isActive ? "online" : "offline";
    }

    isUserActive() {
        console.log(`${this.name} is now ${this.activity}.`);
    }
}

const user1 = new User('Zohan', 'zohan@gmail.com', true);
const user2 = new User('Marry', 'marry@gmail.com', false);
user1.isUserActive();
user2.isUserActive();