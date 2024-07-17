

function bookPrice (val , val2 ,...num1) {
  return num1
}

console.log(bookPrice(199,  200, 300, 5000))


const user = {
  userName : "Ali Yahya",
  price : 199,
  ProductName : "Pizza",
}


function anotherUser (anyObject) {
  console.log (`user name is ${anyObject.userName} and product purchased ${anyObject.ProductName}`)
}

console.log(anotherUser(user))




const price = [200 , 300 , 500 , 600 , 1000 ]

function calculatePrice (getarray) {
  return getarray[4]
}

console.log(calculatePrice(price))
