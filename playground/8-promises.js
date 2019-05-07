/////////////
// Using callbacks
/////////

const doWorkCallback = (callback) => {
    setTimeout(() => {
        // callback('This is my error', undefined)
        callback(undefined, [1, 2, 3])
    }, 2000)
}

doWorkCallback((error, result) => {
    if (error) {
        return console.log(error)
    }
    console.log(result)
})



//////////
// Using Promises
/////////
const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve([1,2,3])
        reject('This is error')
    }, 2000)
})

doWorkPromise.then((result) => {
    console.log('Success!', result)
}).catch((error) => {
    console.log(error)
})