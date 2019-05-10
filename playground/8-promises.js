/////////////
// Using callbacks
/////////

// const doWorkCallback = (callback) => {
//     setTimeout(() => {
//         // callback('This is my error', undefined)
//         callback(undefined, [1, 2, 3])
//     }, 2000)
// }
//
// doWorkCallback((error, result) => {
//     if (error) {
//         return console.log(error)
//     }
//     console.log(result)
// })



//////////
// Using Promises
/////////
// const doWorkPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve([1,2,3])
//         reject('This is error')
//     }, 2000)
// })
//
// doWorkPromise.then((result) => {
//     console.log('Success!', result)
// }).catch((error) => {
//     console.log(error)
// })


// Chaining promises
const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

// No chaining
add(1,2).then((sum) => {
    console.log(sum)

    add(sum, 5).then((sum2) => {
        console.log(sum2)
    }).catch((e) => {
        console.log(e)
    })
}).catch((e) => {
    console.log(e)
})

//With promise chaining
add(1,2).then((sum) => {
    console.log(sum)
    return add(sum, 4)
}).then((sum2) => {
    console.log(sum2)
}).catch((e) => {
    console.log(e)
})