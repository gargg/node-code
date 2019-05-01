// Object property shorthand

const name = 'Some User'
const userAge = 30

const user = {
    name,
    age: userAge,
    location: 'London'
}

console.log(user)

//Object destructuring

const product ={
    label: 'Red notebook',
    price: 3,
    stock: 200,
    salePrice: undefined
}

// const label = product.label
// const stock = product.stock

const {label:productLabel, stock, rating, reviews = 5} = product
console.log(productLabel)
console.log(stock)
console.log(rating) //undefined
console.log(reviews) //defaults to 5

const transaction = (type, {label, stock = 0} = {}) => {  //default empty object
    console.log(type, label, stock)
}

transaction('order', product)