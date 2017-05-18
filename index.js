const app = "I don't do much."

const products = [
  { name: 'Head & Shoulders Shampoo', price: 4.99, discount: .6 },
  { name: 'Twinkies', price: 7.99, discount: .45 },
  { name: 'Oreos', price: 6.49, discount: .8 },
  { name: 'Jasmine-scented bath pearls', price: 13.99, discount: .7 },
]

// function getTotalAmountForProducts(products) {
//   let totalPrice = 0;
//
//   products.forEach(product => {
//     if (product.discount >= .5) {
//       totalPrice += product.price;
//     }
//   });
//
//   return totalPrice;
// }
//
// console.log(getTotalAmountForProducts(products))

// function getTotalAmountForProducts(products, callback){
//   let totalPrice = 0;
//
//   products.forEach(product => {
//     totalPrice = callback(totalPrice, product)
//   })
//   return totalPrice
// }
//
// function callback(totalPrice, product) {
//   if (product.discount >= .5) {  // we can also change to product.price < 7
//     return totalPrice + product.price
//   }
//   return totalPrice
// }
//
// console.log(getTotalAmountForProducts(products, callback))

// function getTotalAmountForProducts(products, callback, initialValue) {
//   let totalPrice = initialValue;
//
//   products.forEach(product => {
//     totalPrice = callback(totalPrice, product);
//   });
//
//   return totalPrice;
// }
//
// function callback(totalPrice, product) {
//   if (product.price < 7) {
//     return totalPrice + product.price;
//   }
//   return totalPrice;
// }
//
// console.log(getTotalAmountForProducts(products, callback, 0))



const couponLocations = [
  { room: 'Living room', amount: 5 },
  { room: 'Kitchen', amount: 2 },
  { room: 'Bathroom', amount: 1 },
  { room: 'Master bedroom', amount: 7 },
]

function reduce(collection, callback, initialValue) {
  let result = initialValue;

  collection.forEach((product, index) => {
    result = callback(result, product, index, collection);
  })
  return result
}

function couponCounter(totalAmount, location) {
  return totalAmount + location.amount;
}
console.log(reduce(couponLocations, couponCounter, 0))

// built in reduce
console.log(couponLocations.reduce(couponCounter, 0))
