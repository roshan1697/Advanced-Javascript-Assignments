
// // Problem Description – Delayed Success (Sleep Wrapper)
// //
// // You are given a value and a delay time in milliseconds.
// // Your task is to implement delayResult(value, ms).
// //
// // The function must return a Promise that resolves with the given value
// // only after ms milliseconds.


function delayResult(value, ms) {
    return new Promise((resolve,reject)=>{
        let done = true
        setTimeout(()=>{
            if(done){
                resolve(value)
            }
            else {
                reject('err')
            }
        },ms)
    })
}

module.exports = delayResult;