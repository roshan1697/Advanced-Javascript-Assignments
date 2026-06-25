// Problem Description – retryOnce(fn)
//
// You are given a function `fn` that returns a Promise.
// Your task is to return a new function that calls `fn` and retries it once
// if the first attempt rejects.
// If the second attempt also rejects, the error should be propagated.


function retryOnce(fn) {
    let value
    let count = 0
    return async function(...args){
        const promise = () =>  Promise.resolve(fn.apply(this,args)).then(data => {return {err:null,result:'success'}}).catch(err => 'error')
        if(count <=2){
            try {
                value = await promise()
                if(value === 'error'){
                    value = await promise()
                }
            } catch (error) {
                
            }
            count++
        }
        return value
    }
        
}

module.exports = retryOnce;
