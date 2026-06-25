// Problem Description – fetchWithTimeout(url, ms, callback)
//
// You are required to write a function named fetchWithTimeout that accepts a URL,
// a time limit in milliseconds, and a callback function.
// The function attempts to fetch data from the given URL.
// If the request completes within the specified time, the callback is invoked with
// null as the first argument and the fetched data as the second argument.
// If the operation exceeds the time limit, the callback is invoked with an Error
// whose message is "Request Timed Out".

function fetchWithTimeout(url, ms, callback) {

    let isDone = false

    const timer = setTimeout(() => {
        if (!isDone) {
            isDone = true
            callback(new Error('Request Timed Out'))
        }
    }, ms)
    const fetchURL = async (url) => {
        const res = await fetch(url, {
            "method": 'GET',
            "headers": {
                'Content-Type': 'application/json',

            }
        })
        if (!res.ok)
            error("Response not ok!")
        
        return res.json()


    }
    fetchURL(url)

        .then(data => {
            isDone = true
            
            callback(null, data)
            clearTimeout(timer)
        })
        .catch(err => {
            isDone = true
            callback(err)
            clearTimeout(timer)
        })



}

module.exports = fetchWithTimeout;
