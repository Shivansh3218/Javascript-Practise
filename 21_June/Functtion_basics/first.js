// TO CALCULATE SUM OF TWO NUMBERS BY NORMAL FUNCTION
function sumoftwo(a,b){
    let sum = a+b
    return sum
}

// TO CHECK THE NUMBER IF IT IS PRIME OR NOT
function to_calculate_prime_number(a){
    let count =0
    let ans = 0 
    for(let i=1;i<=a;i++)
    {
        if(a%i==0){
            count++

        }if(count==2){
            ans = ("The number is a prime number")
        }else{
            ans = "The number is not a prime number"
        }
}return ans
}
console.log(sumoftwo(8765,3242))
console.log(to_calculate_prime_number(8765))

// The practise oF ARROW FUNCTION
// TO PRINT EACH DIGIT IN DIFFERENT LINE

let digit = (a) => {
    let dig = 0
    while(a>0){
    dig = a%10
    console.log(dig)
    a = Math.floor(a/10)
    } return dig

}
console.log(digit(76543))

