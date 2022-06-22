// Code to check if the number's digit's sum is equal to 1 or not


let n = parseInt(process.argv[2])
 let counter =1;
  let sum 
    while(counter<100 && n!=1){
     sum = 0
      while(n!=0){
        let dig = n%10
        sum= sum+ (dig*dig)
        n= Math.floor(n/10)
      }
      counter++
      n=sum
    }
  
    if(n==1){
      console.log("Sum of square is equal to 1")
    }else {
      console.log ("Sum is not equal to 1")
    }
  