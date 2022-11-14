let arr =[
    { product: "Milk", quantity: 1, price: 1.50 },
    { product: "Eggs", quantity: 12, price: 0.10 },
    { product: "Bread", quantity: 2, price: 1.60 },
    { product: "Cheese", quantity: 1, price: 4.50 }
  ]
  let sum=0
  for(let i=0;i<arr.length;i++){
    if(arr[i].quantity>1) arr[i].price = arr[i].price*arr[i].quantity
    sum+= arr[i].price
  }
  console.log(sum)