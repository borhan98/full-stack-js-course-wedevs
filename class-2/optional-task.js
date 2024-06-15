/*-------------------------------------------------------------
                        Task-1
---------------------------------------------------------------*/

// for loop
function printNumbers() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}
printNumbers(); // output: 1 2 3 4 5 6 7 8 9 10

// while loop
function printEvenNumbers() {
    let i = 2;

    while (i <= 20) {
        console.log(i);
        i += 2;
    }
}
printEvenNumbers(); // output: 2 4 6 8 10 12 14 16 18 20

// do while loop
function printOddNumbers() {
    let i = 1;
    do {
        console.log(i);
        i += 2;
    } while (i <= 19);
}
printOddNumbers();

/*-------------------------------------------------------------
                        Task-2
---------------------------------------------------------------*/
// day of the week
function getDayName(dayNumber) {
    let day;
    switch (dayNumber) {
        case 1:
            day = "Sunday";
            break;
        case 2:
            day = "Monday";
            break;
        case 3:
            day = "Tuesday";
            break;
        case 4:
            day = "Webnesday";
            break;
        case 5:
            day = "Thursday";
            break;
        case 6:
            day = "Friday";
            break;
        case 7:
            day = "Saturday";
            break;
        default:
            day = "Please provide a valid day number...!!!";
            break;
    }
    return day;
}

console.log(getDayName(0)); // Please provide a valid day number...!!!
console.log(getDayName(6)); // Friday
console.log(getDayName(7)); // Saturday


/*-------------------------------------------------------------
                        Task-3
---------------------------------------------------------------*/
function testFunctionScope() {
    let insideFunction = function () { }; // It's an inside function
}
// console.log(insideFunction()); // ReferenceError: insideFunction is not defined


function testBlockScope() {
    if (true) {
        let insideVariable = "This is an variable inside a block";
    }
    console.log(insideVariable); // RefferenceError: insideVariable is not defined
}
testBlockScope();


/*-------------------------------------------------------------
                        Task-4
---------------------------------------------------------------*/
(function () {
    console.log("This console is from IIFE function.");
})();


(function (x, y) {
    console.log(x + y);
})(5, 10);


(function () {
    let val = "This is a variable inside the IIFE function";

    function printMessage() {
        console.log(`${val} and this variable is called from an inner function inside IIFE function which function is available only inside the IIFE function.`);
    }

    printMessage();
})();