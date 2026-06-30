// Problem Description – Custom Implementation of Promise.all

// You are required to implement your own version of Promise.all without using the built-in method. 
// The function should accept an array of values that may include Promises or plain constants. 
// It must resolve with an array of results in the same order once all inputs resolve, or reject immediately if any input rejects.
function promiseAll(promises) {
    const arr = 
    promises.map(promise => {
        // return new Promise((resolve,reject)=>{
        //         return promise().then(value => resolve(value)).catch(err => reject(err))
        // })
        return Object.keys(promise)
        
    })
    console.log(arr)
    return arr
}

module.exports = promiseAll;
