/*---------------------------------------------------------
                        Task-1 
-----------------------------------------------------------*/
var a = 5;
var b = 15;
if (a > b) {
    console.log('a is greater than b');
} else {
    console.log('a is not greater than b');
}

function multiply(x, y) {
    return x * y;
}
console.log(multiply(3, 7)); //multiply 3 and 7

var c = 8;
var d = 8;
if (c === d) {
    console.log('c is equal to d');
} else {
    console.log('c is not equal to d');
}

function subtract(m, n) {
    return m - n;
}
console.log(subtract(10, 4)); //subtract 10 and 4

var e = 12;
var f = 6;
if (e % f === 0) {
    console.log('e is divisible by f');
} else {
    console.log('e is not divisible by f');
}

function divide(p, q) {
    return p / q;
}
console.log(divide(20, 5)); //divide 20 by 5

/*----------------------------------------------------------
                    Task-:2
------------------------------------------------------------*/
// Arithmetic Operations
let a = 10;
let b = 5;
console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2
console.log(a % b); // 0

// Comparison Operations
console.log(a > b); // true
console.log(a < b); // false
console.log(a == 10); // true
console.log(b != 5); // false

// Logical Operations
let isAdult = true;
let hasPermission = false;
console.log(isAdult && hasPermission); // false
console.log(isAdult || hasPermission); // true
console.log(!isAdult); // false

// Ternary Operation
let age = 20;
let access = (age >= 18) ? 'Granted' : 'Denied';
console.log(access); // Outputs: Granted


/*-------------------------------------------------------------
                        Task-3
---------------------------------------------------------------*/

// addition function
function add(x, y) {
    return x + y;
}
const addition1 = add(4, 5);
const addition2 = add(7, 9);
console.log(addition1, addition2); // output: 9, 16

// substraction function
function subtract(x, y) {
    return x - y;
}
const substract1 = subtract(5, 2);
const substract2 = subtract(5, 8);
console.log(substract1, substract2); // output: 3, -3

// multiplication function
function multiply(x, y) {
    return x * y;
}
const multiply1 = multiply(4, 5);
const multiply2 = multiply(3, 7);
console.log(multiply1, multiply2); // output: 20, 21

// division function
function divide(x, y) {
    return x / y;
}
const division1 = divide(50, 5);
const division2 = divide(20, 5);
console.log(division1, division2); // output: 10, 4
