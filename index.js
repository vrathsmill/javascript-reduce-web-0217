const app = "I don't do much."

function getTotalAmountForProducts(products) {
  let totalPrice = 0;

  products.forEach(product => {
    if (product.discount >= .5) {
      totalPrice += product.price;
    }
  });

  return totalPrice;
}

console.log(getTotalAmountForProducts(products)); // prints 25.5

function getTotalAmountForProducts(products, callback) {
  let totalPrice = 0;

  products.forEach(product => {
    totalPrice = callback(totalPrice, product);
  });

  return totalPrice;
}

// function callback(totalPrice, product) {
//   if (product.discount >= .5) {
//     return totalPrice + product.price;
//   }
//   return totalPrice;
// }
//
// console.log(getTotalAmountForProducts(products, callback));

function callback(totalPrice, product) {
  if (product.price < 7) {
    return totalPrice + product.price;
  }
  return totalPrice;
}

console.log(getTotalAmountForProducts(products, callback));
