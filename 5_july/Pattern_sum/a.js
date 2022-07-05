let ab=1
let count =1
  for(let i=1;i<=5;i++){
  str= ""
for(let j=1;j<=i;j++){
  str =str+ ` ${count}`
  ab = ab+1
 count = count + ab
}console.log(str)
}