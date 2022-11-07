// Print integers one-to-100 but print “Fizz” if an integer is divisible by three, “Buzz” if an integer is divisible by five, and “FizzBuzz” if an integer is divisible by both three and five

let arr=[];
for(let i=1;i<=100;i++){
    if(i%3==0) {arr.push("Fizz")}
    else if(i%5==0){ arr.push("Buzz")}
    else if(i%3 ==0&&i%5==0){ arr.push("FizzBuzz")}
    else(arr.push(i))
}
console.log(arr)