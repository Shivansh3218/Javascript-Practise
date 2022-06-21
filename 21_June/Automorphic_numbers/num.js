// TO CHECK IF THE NUMBER IS AUTOMORPHIC OR NOT Constraints 1<num<1000000

let num = parseInt(process.argv[2])
let sq = num*num
dig = 0
if(num<10){
    dig=sq%10
}
else if(num<100){
    dig =sq%100
}

else if(num<1000 ){
    dig =sq%1000
}
else if(num<10000 ){
    dig =sq%10000
}
else if(num<100000 ){
    dig =sq%100000
}


if(dig==num){
    console.log("The number is an automorphc number")
}else{
    console.log("The number is not an automorphic number")
}

