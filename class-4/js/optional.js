/**
 * Optional task
 */


// delay message after 'n' seconds
function delayedMessage(sec) {
    const res = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(`Hello after ${sec} seconds`);
        }, sec * 1000)
    })
    return res;
}

async function getMessage() {
    try {
        const message = await delayedMessage(5);
        console.log(message);
    } catch (err) {
        console.log(err);
    }
}
getMessage();