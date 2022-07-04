let n= parseInt(process.argv[2])
let dig, sum =0
let temp =n
let fact =1
if(n==0){
  return "NO"
}
while(temp>=1){
  dig = temp%10
  while(dig>=1){
  fact= fact*dig
  dig= dig-1   
}
  sum =sum+fact
  fact =1
  temp = Math.floor(temp/10)
  // console.log(sum)
  }
if(sum==n){
console.log("YES") 
}else{
  console.log("NO") 
}
