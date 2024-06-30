/**
 * mendatory task
 */

// greet function with setTimeout
function greet(name) {
    setTimeout(() => {
        console.log(`Hello World ${name}`);
    }, 10000);
}
greet("Borhan Uddin");

// print number from 1 to 10 with setInterval
function printNumbers() {
    let number = 1;
    const getInterval = setInterval(function () {
        console.log(number);
        number === 10 && clearInterval(getInterval);
        number++;
    }, 1000)
}
printNumbers();

// handle error with try..catch
function getErr() {
    throw new Error('This is an error!')
}

try {
    getErr();
} catch (err) {
    console.log('I have handled the error successfully.');
}


// promise
function isPromiseFullfilled(condition) {
    const result = new Promise(function (resolve, reject) {
        if (condition) {
            resolve('I am resolved');
        } else {
            reject('I am rejected');
        }
    })
    return result;
}

const promiseFullfilled = false;
isPromiseFullfilled(promiseFullfilled)
    .then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    })
