let arr= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,];

function test(value){

    let sum=0
// for(let i=0; i<arr.length; i++){
    
for(let j=0; j<arr.length; j++){
    if(arr[j]==value)
    sum+=1
}
  if(sum==1)
  return true
  else return false
}
console.log(test(12435))