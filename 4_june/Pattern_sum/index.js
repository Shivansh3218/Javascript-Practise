let n=5
let sum =0;
for(let i=n;i>=1;i--){
    str = "" 
    for(let j=i;j<=n;j++){
      str = str+j
      sum = sum +j
    }
    console.log( str)
  }
 console.log( `The sum of above series is ${sum}`)
 