/**
 * promises
 * a promise in JavaScript is a Object that indicates that something will happen.
 * the promise is used to asynchronous operations and have the following states: 
 * 1. pending => initial state
 * 2. fulfilled => successfully completed status
 * 3. rejected => rejected status
 * 4. settled => successfully or failed completed status
 */
let fulfilled = true;

console.log('Order an Uber')
const promise = new Promise((resolve, reject) => {
    if (fulfilled) {
        return resolve('Order accepted !');
    }
    return reject('Order cancelled !');
});

promise
    .then(result => console.log('Status: ' + result))
    .catch(err => console.log('Status: ' + err))
    .finally(() => console.log('Promise completed !'));

//representing the asynchronous of the steps
console.log('awaiting...');
