/**
 * Task 1
 */
function createGreeting(name, age) {
    return `Hello, my name is ${name} and I'm ${age} years old.`;
}
console.log(createGreeting("Borhan", 23));

/**
 * Task 2
 */
function calculateArea(length, width = length) {
    return length * width;
}
console.log(calculateArea(5));
console.log(calculateArea(5, 10));

/**
 * Task 3
 */
const user1 = {
    fName: "Borhan",
    lName: "Uddin",
    address: {
        street: "Road 5, Mirpur DOHS",
        country: "Bangladesh"
    }
}
const user2 = {
    fName: "Borhan",
    address: {
        city: "Dhaka",
        country: "Bangladesh"
    }
}

function getStreetName(user) {
    return user && user?.address?.street ? user.address.street : "Street not found";
}
console.log(getStreetName(user1));
console.log(getStreetName(user2));

/**
 * Task 4
 */
function cleanUpString(str) {
    str = str.trim();
    str = str.replace(/white/gi, "red");
    return str;
}
console.log(cleanUpString("     White is white  "));

/**
 * Task 5
 */
function processArray(arr) {
    let arrayOfObj = [];
    
    for (el of arr) {
        let splitedStr = el.split("-");
        if (splitedStr[1] >= 18) {
            arrayOfObj.push({ name: splitedStr[0], age: splitedStr[1] });
        }
    }
    return arrayOfObj;
}

const arrayOfNameAge = ["Zohan-25", "Wafi-17", "Saher-19"];
console.log(processArray(arrayOfNameAge));