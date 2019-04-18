setTimeout(() => {
    console.log('Two seconds are up')
}, 2000)

const names = ['Garima', 'Garg']
const shortNames = names.filter((name) => name.length <= 4)

console.log(shortNames)


const geocode1 = (address, callback) => {
    const data = {
        latitude: 0,
        longitude: 0
    }

    return data
}

const data = geocode1('Los Angeles')
console.log(data)


const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        }

        callback(data)
    }, 2000)
}

geocode('Los Angeles', (data) => {
    console.log(data)
})


const add = (var1, var2, callback) => {
    setTimeout(() => {
        const sum = var1 + var2
        callback(sum)
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum)
})